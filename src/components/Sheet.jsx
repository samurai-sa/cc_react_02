import { useContext, useState, useEffect } from 'react';
import { BingoGameContext } from './BingoGameProvider.jsx';
export const Sheet = () => {
    const { rouletteSize, cellFlags } = useContext(BingoGameContext);
    const sheetWidthPercentage = 80;
    const cellsWidthPercentage = 100 / 5;
 
    const cellsContainerStyle = {
        width: `${sheetWidthPercentage}%`,
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto 30px',
    };
    // ビンゴシートを表す配列
    const [numbers, setNumbers] = useState([]);
 
    // 初回のみ実行させたい処理
    useEffect(() => {
        const values = [];
        for(let i = 0; i < 25; i++){
            let rand = Math.floor(Math.random() * (rouletteSize * rouletteSize));
            while(values.includes(rand)){
                rand = Math.floor(Math.random() * (rouletteSize * rouletteSize));
                console.log(rand);
            }
            values.push(rand);
        }
        setNumbers(values);
    },[rouletteSize]);
 
    // cell の描画処理
    let cells = [];
    const cellStyle = {
        width: `${cellsWidthPercentage}%`,
        height: '50px',
        border: 'solid 1px black',
        boxSizing: 'border-box',
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '24px',
    };
    for(let number of numbers){
        const cellStyleObj = Object.assign({}, cellStyle);
        // 選択済みのセルを青にする。
        if(cellFlags[number] === true){
            cellStyleObj.backgroundColor = 'blue';
        }
        const cell = <div key={number} style={cellStyleObj}>{(number + 1)}</div>;
        cells.push(cell);
    }
    return (
        <>
            <div style={cellsContainerStyle}>
                { cells }
            </div>
        </>
    );
};
