import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment-confirmed-modal',
  templateUrl: './payment-confirmed-modal.component.html',
  styleUrls: ['./payment-confirmed-modal.component.css'],
})
export class PaymentConfirmedModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
