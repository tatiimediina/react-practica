import { useCounter } from "../hooks/useCounter";

export const Button = () => {
  const { contador, incrementar, decrementar } = useCounter();

  return (
    <>
      <button
        className="bg-pink-200 text-center font-bold text-2xl text-white"
        onClick={incrementar}
      >
        incrementar
      </button>
      <p>{contador}</p>
      <button
        className="bg-pink-200 text-center font-bold text-2xl text-white"
        onClick={decrementar}
      >
        decrementar
      </button>
    </>
  );
};
