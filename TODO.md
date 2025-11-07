# TODO: Integrate Razorpay Payment Gateway

## Steps to Complete

1. **Add Razorpay Script to index.html**: Include the Razorpay checkout script in the head section of index.html for loading the SDK. ✅

2. **Create Payment Service**: Create `src/app/core/services/payment.service.ts` to encapsulate Razorpay initialization and payment handling logic. ✅

3. **Update Checkout Component TypeScript**: Modify `src/app/features/checkout/checkout-page/checkout-page.component.ts` to use the PaymentService instead of simulated payment processing. ✅

4. **Update Checkout Component HTML**: Remove manual card input fields from `src/app/features/checkout/checkout-page/checkout-page.component.html` and replace with Razorpay payment button. ✅

5. **Handle Payment Callbacks**: Ensure successful payment triggers order placement and shows confirmation modal, while handling failures appropriately. ✅

6. **Test Integration**: Verify the Razorpay modal opens, processes test payments, and integrates with the order flow.

7. **Update TODO.md**: Mark tasks as completed and remove this section once integration is done.
