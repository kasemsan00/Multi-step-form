export interface IFormInput {
  name: string;
  email: string;
  phoneNumber: string;
  planName: string;
  planMonthly: boolean;
  planYear: boolean;
  planPrice: number;
  onlineServices: boolean;
  onlineServicesPrice: number;
  largerStorage: boolean;
  largerStoragePrice: number;
  customizableProfile: boolean;
  customizableProfilePrice: number;
}
export interface IValidField {
  isNameValid: boolean | undefined;
  isEmailValid: boolean | undefined;
  isPhoneNumberValid: boolean | undefined;
}
