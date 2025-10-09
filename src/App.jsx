import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { Page404 } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
