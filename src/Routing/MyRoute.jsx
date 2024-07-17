import Home from "../pages/Home";
import Products from "../pages/Products";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import NavBar from "../components/navBar";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProductDetails from "../pages/ProductDetails";
import Protectedroute from "./Protectedroute";
import NoteState from "../context/notes/notestate";
import Cart from "../pages/Cart";

const MyRoute = () => (
  <NoteState>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route
          path="productDetails/:productID"
          element={
            <Protectedroute>
              <ProductDetails />
            </Protectedroute>
          }
        />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="user/login" element={<Login />} />
      <Route path="user/signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </NoteState>
);
export default MyRoute;
