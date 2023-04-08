export default {
  isAuthenticated() {
    return !!localStorage.getItem("I_FINANCE_TOKEN");
  },

  get() {
    return localStorage.getItem("I_FINANCE_TOKEN");
  },

  destroy() {
    localStorage.removeItem("I_FINANCE_TOKEN");
  },
};
