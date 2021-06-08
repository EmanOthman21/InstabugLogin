const isLoggedIn = () => {
  return localStorage.getItem("userEmail") ? true : false;
};

export { isLoggedIn };
