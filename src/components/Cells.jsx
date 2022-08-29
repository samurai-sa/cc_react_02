import { useContext } from 'react';
import { BingoGameContext } from './BingoGameProvider.jsx';
 
export const Cells = () => {
    const { rouletteSize, randomNumber, cellFlags } = useContext(BingoGameContext);
    const rouletteWidthPercentage = 80;
    const cellsWidthPercentage = 100 / rouletteSize;
 
    const cellsContainerStyle = {
        width: `${rouletteWidthPercentage}%`,
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
    };
    const cellStyle = {
        width: `${cellsWidthPercentage}%`,
        height: '50px',
        border: 'solid 1px black',
        boxSizing: 'border-box',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '24px',
    };
 
    let cells = [];
    for(let i = 0; i < rouletteSize * rouletteSize; i++){
        // オブジェクトをコピー
        const cellStyleObj = Object.assign({}, cellStyle);
        // ランダム選択されたマスを赤に
        if(i === randomNumber){
            cellStyleObj.backgroundColor = 'red';
        }
        // 選択済みのマスを緑に
        if(cellFlags[i] === true){
            cellStyleObj.backgroundColor = 'green';
        }
        const cell = <div key={i} style={cellStyleObj}>{i + 1}</div>;
        cells.push(cell);
    };
 
    return (
        <>
            <div style={cellsContainerStyle}>
                { cells }
            </div>
        </>
    );
};
