import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidatorPattern, israelMobilePhoneValidatorPattern } from './common.models';
import {
  AccountControls, AllRegistrationSessionData,
  RegistrationInfoControls,
  UploadDocumentsControls,
  VerificationEmailControls,
} from './registration.models';

export function registrationInfoFormMapper(): FormGroup<RegistrationInfoControls> {
  return new FormGroup<RegistrationInfoControls>({
    companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    identifier: new FormControl('', [Validators.required, Validators.minLength(9)]),
    email: new FormControl('', [Validators.required, Validators.pattern(emailValidatorPattern) ]),
    yourName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(israelMobilePhoneValidatorPattern)]),
    acceptPrivacy: new FormControl(false, [Validators.requiredTrue]),
  });
}

export function registrationFormMapper(currentStorageData: AllRegistrationSessionData): FormGroup<RegistrationInfoControls> {
  return new FormGroup<RegistrationInfoControls>(<RegistrationInfoControls>{
    companyName: new FormControl(currentStorageData.companyName, [Validators.required, Validators.minLength(3)]),
    identifier: new FormControl(currentStorageData.identifier, [Validators.required, Validators.minLength(9)]),
    email: new FormControl(currentStorageData.email, [Validators.required, Validators.pattern(emailValidatorPattern)]),
    yourName: new FormControl(currentStorageData.yourName, [Validators.required, Validators.minLength(3)]),
    phone: new FormControl(currentStorageData.phone, [Validators.required, Validators.pattern(israelMobilePhoneValidatorPattern)]),
    acceptPrivacy: new FormControl(true, [Validators.requiredTrue]),
  });
}

export function uploadingDocumentsFormMapper(): FormGroup<UploadDocumentsControls> {
  return new FormGroup<UploadDocumentsControls>({
    files: new FormControl(),
  });
}

export function verifyEmailFormMapper(): FormGroup<VerificationEmailControls> {
  return new FormGroup<VerificationEmailControls>({
    emailVerifyCode: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
}

export function paymentMethodFormMapper(): FormGroup<AccountControls> {
  return new FormGroup<AccountControls>({
    accountNumber: new FormControl('', [Validators.required]),
    bankName: new FormControl('', [Validators.required]),
    branchNumber: new FormControl('', [Validators.required]),
    codeNumber: new FormControl(''),
  });
}
