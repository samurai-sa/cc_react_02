import { createContext, useState } from "react";

export const BingoGameContext = createContext({});

export const BingoGameProvider = (props) => {
  const { children } = props;
  const [randomNumber, setRandomNumber] = useState()
  return (
    <BingoGameContext.Provider value={{ randomNumber, setRandomNumber }} >
      { children }
    </BingoGameContext.Provider>
  )
}