import { BingoGameProvider } from './BingoGameProvider.jsx';
import { BingoGame } from './BingoGame.jsx';
 
export const Bingo = (props) => {
  const { size } = props;
  return (
    <>
      <BingoGameProvider size={size}>
        <BingoGame />
      </BingoGameProvider>
    </>
  );
};
