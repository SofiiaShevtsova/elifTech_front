import { Route, Routes, Navigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Orders from "./pages/OrdersPage/Orders";
import Shops from "./pages/ShopsPage/Shops";
import Loyout from "./components/Loyout";
import Products from "./components/Products";

export const DeliveryContext = createContext(null);

const orderListStorege = JSON.parse(localStorage.getItem("order-list")) || [];

const App = () => {
  const [orderList, setOrderList] = useState(orderListStorege);
  const [choiceShop, setChoiceShop] = useState('')

  useEffect(() => {
    localStorage.setItem("order-list", JSON.stringify(orderList));
  }, [orderList]);

  return (
    <DeliveryContext.Provider value={{ setOrderList, orderList, choiceShop, setChoiceShop }}>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route path="shops" element={<Shops />}>
            <Route path=":id" element={<Products />} />
          </Route>
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Navigate to="/shops" />} />
      </Routes>
    </DeliveryContext.Provider>
  );
};

export default App;
