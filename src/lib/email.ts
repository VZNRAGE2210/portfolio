import emailjs from "@emailjs/browser";

export interface EmailParams {
  from_name: string;
  from_email: string;
  message: string;
  [key: string]: string;
}

export async function sendEmail(params: EmailParams): Promise<void> {
  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  await emailjs.send(serviceId, templateId, params, publicKey);
}
