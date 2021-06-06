const isLoggedIn = () => {
  return localStorage.getItem("loggedIn") ? true : false;
};

const logout = () => {
  localStorage.removeItem("loggedIn");
};

export { isLoggedIn, logout };
