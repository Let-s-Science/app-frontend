import { Navigate } from "react-router";

const Logout = () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
  return <Navigate to="/login"></Navigate>;
};

export default Logout;
