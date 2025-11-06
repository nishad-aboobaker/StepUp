# TODO: Include Phone Number in User Registration

## Steps to Complete

1. **Update Signup Form HTML**: Add a phone number input field to `src/app/features/auth/signup/signup.component.html` between email and password fields. ✅

2. **Update Signup Component TypeScript**: Modify `src/app/features/auth/signup/signup.component.ts` to include `phone` in the user object. ✅

3. **Update Auth Service**: Modify `src/app/core/services/auth.service.ts` to handle the phone number in the signup method (no changes needed as it pushes userData directly, but ensure it's included). ✅

4. **Update User Management Display**: Add a "Phone" column to the user table in `src/app/features/users/user-management/user-management.component.html` to display phone numbers. ✅

5. **Test Signup Process**: Verify that the phone number is captured, stored, and displayed correctly.

6. **Optional: Update User Detail View**: If needed, update `src/app/features/users/user-detail/user-detail.component.html` to show phone number in user details.
