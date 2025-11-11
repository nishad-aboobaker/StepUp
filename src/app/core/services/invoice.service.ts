import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as QRCode from 'qrcode';
import { Order } from './orders.service';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor() {}

  async generateInvoice(order: Order): Promise<void> {
    const invoiceElement = this.createInvoiceHTML(order);

    // Create a temporary div to render the invoice
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = invoiceElement;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    tempDiv.style.width = '800px';
    document.body.appendChild(tempDiv);

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`invoice-${order.id}.pdf`);
    } finally {
      document.body.removeChild(tempDiv);
    }
  }

  async generateShippingLabel(order: Order): Promise<void> {
    const labelElement = await this.createShippingLabelHTML(order);

    // Create a temporary div to render the label
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = labelElement;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    tempDiv.style.width = '400px';
    document.body.appendChild(tempDiv);

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', [100, 150]); // Landscape, custom size for shipping label

      const imgWidth = 150; // Label width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      pdf.save(`shipping-label-${order.id}.pdf`);
    } finally {
      document.body.removeChild(tempDiv);
    }
  }

  private async createShippingLabelHTML(order: Order): Promise<string> {
    const orderDate = new Date(order.orderDate).toLocaleDateString();
    const qrCodeDataURL = await this.generateQRCode(order.id);

    // Generate a simple barcode-like pattern
    const barcode = this.generateBarcode(order.id);

    return `
      <div style="font-family: 'Courier New', monospace; width: 400px; height: 200px; border: 2px solid #000; background: white; position: relative; padding: 10px; box-sizing: border-box;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-bottom: 1px solid #000; padding-bottom: 5px;">
          <div style="font-size: 14px; font-weight: bold;">StepUp Shipping</div>
          <div style="font-size: 12px;">Priority</div>
        </div>

        <!-- Tracking Number -->
        <div style="text-align: center; margin-bottom: 5px;">
          <div style="font-size: 16px; font-weight: bold;">${order.id}</div>
          <div style="font-size: 10px;">Tracking Number</div>
        </div>

        <!-- Barcode -->
        <div style="text-align: center; margin-bottom: 5px;">
          <div style="font-family: 'Courier New', monospace; font-size: 24px; letter-spacing: -2px; color: #000;">${barcode}</div>
        </div>

        <!-- From/To Section -->
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <div style="width: 45%;">
            <div style="font-size: 10px; font-weight: bold; margin-bottom: 2px;">FROM:</div>
            <div style="font-size: 9px; line-height: 1.2;">
              StepUp Warehouse<br>
              Delhi, India<br>
              110001
            </div>
          </div>
          <div style="width: 45%;">
            <div style="font-size: 10px; font-weight: bold; margin-bottom: 2px;">TO:</div>
            <div style="font-size: 9px; line-height: 1.2;">
              ${order.shippingAddress.name}<br>
              ${order.shippingAddress.address}<br>
              ${order.shippingAddress.city}, ${order.shippingAddress.zip}
            </div>
          </div>
        </div>

        <!-- QR Code -->
        <div style="position: absolute; top: 10px; right: 10px;">
          <img src="${qrCodeDataURL}" alt="QR Code" style="width: 40px; height: 40px;" />
        </div>

        <!-- Service Type and Weight -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; border-top: 1px solid #000; padding-top: 5px;">
          <div style="font-size: 10px;">
            <div>Service: Standard</div>
            <div>Weight: ${order.items.reduce(
              (total, item) => total + item.qty,
              0
            )} items</div>
          </div>
          <div style="font-size: 10px; text-align: right;">
            <div>Date: ${orderDate}</div>
            <div>Mode of Payment: Online</div>
          </div>
        </div>
      </div>
    `;
  }

  private async generateQRCode(data: string): Promise<string> {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(data, {
        width: 40,
        margin: 0,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
      return qrCodeDataURL;
    } catch (error) {
      console.error('Error generating QR code:', error);
      return '';
    }
  }

  private generateBarcode(orderId: string): string {
    // Create a simple barcode-like pattern using the order ID
    const chars = orderId.split('');
    let barcode = '';

    chars.forEach((char) => {
      const code = char.charCodeAt(0);
      // Convert to a pattern of thick/thin bars
      const pattern = code % 2 === 0 ? '█▌' : '▌█';
      barcode += pattern;
    });

    return barcode.substring(0, 20); // Limit length
  }

  private createInvoiceHTML(order: Order): string {
    const orderDate = new Date(order.orderDate).toLocaleDateString();
    const itemsHTML = order.items
      .map(
        (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
            item.name
          }</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${
            item.qty
          }</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">₹${
            item.price
          }</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">₹${
            item.price * item.qty
          }</td>
        </tr>
      `
      )
      .join('');

    return `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: white;">
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px;">
          <h1 style="margin: 0; color: #333; font-size: 28px;">StepUp</h1>
          <p style="margin: 5px 0; color: #666;">Your Fashion Destination</p>
          <p style="margin: 5px 0; color: #666;">Email: stepupshoes.help@gmail.com| Phone: +91-9895321914</p>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div>
            <h3 style="margin: 0 0 10px 0; color: #333;">Invoice To:</h3>
            <p style="margin: 5px 0;">${order.shippingAddress.name}</p>
            <p style="margin: 5px 0;">${order.shippingAddress.address}</p>
            <p style="margin: 5px 0;">${order.shippingAddress.city}, ${order.shippingAddress.zip}</p>
            <p style="margin: 5px 0;">${order.shippingAddress.email}</p>
          </div>
          <div style="text-align: right;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Invoice Details:</h3>
            <p style="margin: 5px 0;"><strong>Invoice #:</strong> ${order.id}</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${orderDate}</p>
            <p style="margin: 5px 0;"><strong>Status:</strong> ${order.status}</p>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #333; font-weight: bold;">Product</th>
              <th style="padding: 12px; text-align: center; border-bottom: 2px solid #333; font-weight: bold;">Qty</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #333; font-weight: bold;">Price</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #333; font-weight: bold;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHTML}
          </tbody>
          <tfoot>
            <tr style="background-color: #f8f9fa;">
              <td colspan="3" style="padding: 12px; text-align: right; font-weight: bold;">Grand Total:</td>
              <td style="padding: 12px; text-align: right; font-weight: bold; font-size: 18px;">₹${order.total}</td>
            </tr>
          </tfoot>
        </table>

        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666;">
          <p style="margin: 5px 0;">Thank you for shopping with StepUp!</p>
          <p style="margin: 5px 0;">For any queries, please contact our customer support.</p>
        </div>
      </div>
    `;
  }
}
