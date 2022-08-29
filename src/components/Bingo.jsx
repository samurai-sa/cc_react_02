import { BingoGameProvider } from './BingoGameProvider.jsx';
import { BingoGame } from './BingoGame.jsx';
 
export const Bingo = () => {
  return (
    <>
      <BingoGameProvider>
        <BingoGame />
      </BingoGameProvider>
    </>
  );
};
