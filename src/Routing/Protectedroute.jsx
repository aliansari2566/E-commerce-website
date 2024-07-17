import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { noteContext } from "../context/notes/notestate";

const Protectedroute = ({ children }) => {
  const { loggin } = useContext(noteContext);
  return loggin ? children : <Navigate to="/user/login" />;
};
export default Protectedroute;
