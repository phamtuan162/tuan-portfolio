"use server";
import React from "react";

import { Resend } from "resend";

import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("email");

  if (!validateString(senderEmail)) {
    return { error: "Invalid sender email" };
  }

  const message = formData.get("message");

  if (!validateString(message)) {
    return { error: "Invalid message" };
  }

  const phone = formData.get("phone");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const subject = formData.get("subject");

  const fullName = `${firstName} ${lastName}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>📬 Tin nhắn mới từ biểu mẫu liên hệ</h2>
      <p><strong>Họ tên:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>
      <p><strong>Số điện thoại liên hệ:</strong> ${phone}</p>
      <p><strong>Nội dung:</strong></p>
      <div style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>
  `;

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "tnpham352@gmail.com",
      subject: subject.toString(),
      replyTo: senderEmail.toString(),
      html: htmlContent,
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return {
    data,
  };
};
