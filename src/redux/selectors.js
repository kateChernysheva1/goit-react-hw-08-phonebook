export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const isAuth = state => state.auth.isAuth;
export const tokenUser = state => state.auth.token;
export const emailUser = state => state.auth.email;
