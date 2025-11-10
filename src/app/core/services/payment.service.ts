import { Injectable } from '@angular/core';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private razorpayKey = 'rzp_test_RcjYj2Kkp844FN'; // Test key

  constructor() {}

  initiatePayment(
    amount: number,
    currency: string,
    orderId: string,
    customerName: string,
    customerEmail: string,
    onSuccess: (response: any) => void,
    onFailure: (error: any) => void
  ) {
    const options = {
      key: this.razorpayKey,
      amount: amount * 100, // Razorpay expects amount in paisa (multiply by 100)
      currency: currency,
      name: 'StepUp',
      description: 'Pay to StepUp',
      // order_id: orderId, // Remove order_id for test mode without backend order creation
      handler: onSuccess,
      prefill: {
        name: customerName,
        email: customerEmail,
      },
      theme: {
        color: '#3399cc',
      },
      modal: {
        ondismiss: onFailure,
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
