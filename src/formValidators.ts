export const validatePassword = ( val?: string): string | boolean => {
  if(!val) return 'Password is required';
  if(!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(val)) return 'Weak password! It should be 8 characters or more, contains at least 1 upper case, lower case, numeral and special characters !@#$&*';
  return true;
};

export const validateEmail = ( val?: string): string | boolean => {
  if(!val) return 'Email is required';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Email is Invalid';
  return true;
};

export const validateRequired = ( val?: string): string | boolean => {
  if(!val) return 'Field is required';
  return true;
};
