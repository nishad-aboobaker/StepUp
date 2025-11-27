import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // Credentials for the main service
  private serviceId = environment.emailjs.serviceId;
  private templateIdUpdate = environment.emailjs.templateIdUpdate;
  private templateIdConfirm = environment.emailjs.templateIdConfirm;
  private publicKey = environment.emailjs.publicKey;

  // Credentials for the OTP service
  private otpServiceId = environment.emailjs.otpServiceId;
  private otpTemplateId = environment.emailjs.otpTemplateId;
  private passwordResetTemplateId = environment.emailjs.passwordResetTemplateId;
  private otpPublicKey = environment.emailjs.otpPublicKey;

  constructor() {
    // Initialize EmailJS with the public key for the main service
    emailjs.init(this.publicKey);
  }

  // Send order confirmation email
  async sendOrderConfirmationEmail(
    userEmail: string,
    userName: string,
    orderId: string,
    orderDate: string,
    orderTotal: number,
    itemsSummary: string,
    shippingAddress: string,
    orderStatus: string
  ): Promise<boolean> {
    try {
      const templateParams = {
        to_email: userEmail,
        to_name: userName,
        order_id: orderId,
        order_date: orderDate,
        order_total: orderTotal.toFixed(2),
        items_summary: itemsSummary,
        shipping_address: shippingAddress,
        order_status: orderStatus,
        subject: `Order Confirmation - ${orderId}`,
        year: new Date().getFullYear()
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        this.serviceId,
        this.templateIdConfirm,
        templateParams
      );

      console.log('Order confirmation email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send order confirmation email:', error);
      return false;
    }
  }

  // Send order status update email
  async sendOrderStatusUpdateEmail(
    userEmail: string,
    userName: string,
    orderId: string,
    newStatus: string,
    orderDate: string,
    orderTotal: number,
    itemsSummary: string
  ): Promise<boolean> {
    try {
      const templateParams = {
        to_email: userEmail,
        to_name: userName,
        order_id: orderId,
        order_status: newStatus,
        order_date: orderDate,
        order_total: orderTotal.toFixed(2),
        items_summary: itemsSummary,
        subject: `Order Status Update - ${orderId}`,
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        this.serviceId,
        this.templateIdUpdate,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  async sendOtpEmail(userEmail: string, userName: string, otp: string): Promise<boolean> {
    try {
      const templateParams = {
        to_email: userEmail,
        to_name: userName,
        otp: otp,
        subject: 'Your OTP for Sign Up',
        year: new Date().getFullYear()
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        this.otpServiceId,
        this.otpTemplateId,
        templateParams,
        this.otpPublicKey
      );

      console.log('OTP email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send OTP email:', error);
      return false;
    }
  }

  async sendPasswordResetOtpEmail(userEmail: string, userName: string, otp: string): Promise<boolean> {
    try {
      const templateParams = {
        to_email: userEmail,
        to_name: userName,
        otp: otp,
        subject: 'Password Reset OTP',
        year: new Date().getFullYear()
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        this.otpServiceId,
        this.passwordResetTemplateId,
        templateParams,
        this.otpPublicKey
      );

      console.log('Password reset OTP email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send password reset OTP email:', error);
      return false;
    }
  }

  // Update EmailJS configuration
  updateConfig(serviceId: string, templateIdConfirm: string, templateIdUpdate: string, publicKey: string) {
    this.serviceId = serviceId;
    this.templateIdConfirm = templateIdConfirm;
    this.templateIdUpdate = templateIdUpdate;
    this.publicKey = publicKey;
    emailjs.init(this.publicKey);
  }
}
