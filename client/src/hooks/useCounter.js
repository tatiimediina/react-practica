import { useState } from "react";
export const useCounter = (state, action) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    return contador < 10 ? setContador(contador + 1) : setContador(10);
  };
  const decrementar = () => {
    return contador > 0 ? setContador(contador - 1) : setContador(0);
  };

  return { incrementar, decrementar, contador };
};
