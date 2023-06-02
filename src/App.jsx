import { Route, Routes, Navigate } from "react-router-dom";
import Orders from "./pages/OrdersPage/Orders";
import Shops from "./pages/ShopsPage/Shops";
import Loyout from "./components/Loyout";
import Products from "./components/Products";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route path="shops" element={<Shops />}>
          <Route path=":id" element={<Products />} />
        </Route>
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
