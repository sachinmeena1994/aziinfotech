import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import transition from "./transition";
import { AnimatePresence } from "framer-motion";
import Shop from "./routes/Shop/Shop";
import Faq from "./routes/Faq/Faq";
import Cart from "./routes/Cart/Cart";
import LocomotiveScroll from "locomotive-scroll";
import ProductDisplay from './routes/product-display/product-display.component';
const App = () => {
  const location = useLocation();

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="faq" element={<Faq />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path='product-display' element={<ProductDisplay />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
