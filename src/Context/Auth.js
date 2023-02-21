import { createContext, useContext } from "react";


export const getUser = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
}
export const isLogend = () => {
  return getUser() == null
}
export const getUserName = () => {
  return getUser().name;
}

export const getUserEmail = () => {
  return getUser().email;
}
export const getUserRol = () => {
  return getUser() && getUser().isAdmin
}
export const isAdminRole = () => {
  return getUserRol() === true;
}
export const authToken = getUser().token


export const AuthContext = createContext(null)
export const useAuthtContext = () => {// replace  const context=useContext(AuthContext)
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  // <AuthContext.Provider value={getUser()}>{children}</AuthContext.Provider>
  return <AuthContext.Provider value={authToken}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
