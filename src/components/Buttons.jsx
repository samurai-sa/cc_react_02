import { useContext } from 'react';
import { BingoGameContext } from './BingoGameProvider.jsx';
import classes from './buttons.module.css';
export const Buttons = () => {
  const { startBingo, stopBingo, resetBingo } = useContext(BingoGameContext);
  return (
    <>
      <div className={classes.buttons}>
        <button onClick={startBingo}>start</button>
        <button onClick={stopBingo}>stop</button>
        <button onClick={resetBingo}>reset</button>
      </div>
    </>
  );
};
