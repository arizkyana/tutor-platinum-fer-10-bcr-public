export const formatEmail = (email) => {
  const match = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
  return match;
};

export const minPassword = (password, min = 6) => {
  return password?.length >= min;
};
