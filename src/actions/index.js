export const USER_EMAIL = 'USER_EMAIL';

export const recivedUser = (email) => ({
  type: USER_EMAIL,
  email,
});
