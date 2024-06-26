export interface FormsType {
  control?: any;
  errors: any;
  onSubmit: any;
  isLoading: boolean;
  register: any;
  handleSubmit: any;
}

export interface RegisterFormFielsType {
  email: string;
  password: string;
  how_did_hear: string;
}

export interface LoginFormFielsType {
  email: string;
  password: string;
}

export interface ForgetPasswordFormFielsType {
  email: string;
}

export interface OnboardingProfileFormFielsType  {
 displayName: string;
 expertise: string;
 biographie: string;
}

