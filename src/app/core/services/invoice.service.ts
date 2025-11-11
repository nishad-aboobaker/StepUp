import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
