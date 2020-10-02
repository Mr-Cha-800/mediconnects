export const validatePassword = ( val?: string): string | boolean => {
  if(!val) return 'Password is required';
  if(val.length < 6) return 'Passwords must be at least 6 characters';
  return true;
};

export const validateEmail = ( val?: string): string | boolean => {
  if(!val) return 'Email is required';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Email is Invalid';
  return true;
};
