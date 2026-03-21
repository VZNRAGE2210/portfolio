"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Subtle Background Sphere ─── */
function BackgroundSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.05;
    meshRef.current.rotation.y = t * 0.07;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[5, 2]} />
      <meshStandardMaterial
        color="#818cf8"
        wireframe
        transparent
        opacity={0.05}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ─── Calmer Particle Field ─── */
function ParticleField({ count = 1000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#38bdf8"),
      new THREE.Color("#818cf8"),
      new THREE.Color("#c084fc"),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 40;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 40;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.002;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Gentle Mouse Parallax Camera Rig ─── */
function CameraRig() {
  const { camera } = useThree();

  useFrame((state) => {
    const { pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.5,
      0.02
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.2 + 0.5,
      0.02
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Assembled 3D Scene ─── */
export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#818cf8" />
      <pointLight position={[-10, -5, 5]} intensity={0.2} color="#38bdf8" />

      <CameraRig />
      <ParticleField count={800} />
      <BackgroundSphere />
    </>
  );
}
