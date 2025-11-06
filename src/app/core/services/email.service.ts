import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = 'service_u745apb'; // Replace with your EmailJS service ID
  private templateId = 'template_o5flbfe'; // Replace with your EmailJS template ID
  private publicKey = 'SWC2-g6JKYPKan4z-'; // Replace with your EmailJS public key

  constructor() {
    // Initialize EmailJS with your public key
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
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        this.serviceId,
        this.templateId,
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
        this.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  // Update EmailJS configuration
  updateConfig(serviceId: string, templateId: string, publicKey: string) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
    emailjs.init(this.publicKey);
  }
}
