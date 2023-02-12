import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import Grocery from "../pages/grocery"
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import CartPage from "../pages/CartPage";
import { useRef } from "react";
import { useDisclosure, Box } from "@chakra-ui/react";
// import DrawerComponent from "../components/DrawerComponent";
import Nav from "../components/Nav";
import Footer from "../components/Footer"


import { Route, Routes } from "react-router";
export default function Layout() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
    <div>
      <>
        <Nav ref={btnRef} onOpen={onOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="about" element={<Grocery />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
          <Route path="SignInPage" element={<SignInPage />} />
          <Route path="CartPage" element={<CartPage />} />
        </Routes>
        <Footer />

 /
       
      </>
    </div>
  );
}