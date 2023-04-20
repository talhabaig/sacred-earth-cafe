import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { OrderContext } from "./Contexts/Order";
const App = () => {
  const [newOrder, setNewOrder] = useState([]);
  const [previousOrder, setPreviousOrder] = useState([]);

  return (
    <OrderContext.Provider
      value={{ newOrder, setNewOrder, previousOrder, setPreviousOrder }}
    >
      <RouterProvider router={routes} />
    </OrderContext.Provider>
  );
};

export default App;
