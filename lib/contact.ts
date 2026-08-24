export const CONTACT_RECAPTCHA_ACTION = "contact";

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormError =
  | "Invalid Name"
  | "Invalid E-mail"
  | "Invalid Message";

export const validateContactForm = ({
  name,
  email,
  message,
}: ContactFormFields): ContactFormError | null => {
  if (name.trim().length < 3 || name.trim().length > 200) {
    return "Invalid Name";
  }

  if (
    email.trim().length > 100 ||
    !email.trim().toLowerCase().match(EMAIL_REGEX)
  ) {
    return "Invalid E-mail";
  }

  if (message.trim().length < 5 || message.trim().length > 500) {
    return "Invalid Message";
  }

  return null;
};
