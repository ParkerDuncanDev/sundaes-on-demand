import { createContext, useContext, useState } from "react";

const OrderDetails = createContext();

//create custom hook to check wether were in a provider
export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      "usseOrderDetails must becalled from witnin OrderDetailsProvider"
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // * example: {Chocolate: 1, Vanilla: 2}
    toppings: {}, //
  });

  const value = {};
  return <OrderDetails.Provider value={value} {...props} />;
}
