import { createContext, useState } from 'react';
 
export const BingoGameContext = createContext({});
 
export const BingoGameProvider = (props) => {
    const { children, size } = props;
    const [randomNumber, setRandomNumber] = useState(-1);
    const [rouletteSize, setRouletteSize] = useState(size);
 
    const initialFlags = [];
    for(let i = 0; i < rouletteSize * rouletteSize; i++){
        initialFlags.push(false);
    };
    const [cellFlags, setCellFlags] = useState(initialFlags);
    const [intervalId, setIntervalId] = useState();
 
    const changeRandomNumber = () => {
        if(!cellFlags.includes(false)){
            return;
        }
        let num = Math.floor(Math.random() * cellFlags.length);
        while(cellFlags[num] === true){
            num = Math.floor(Math.random() * cellFlags.length);
        }
        setRandomNumber(num);
        setIntervalId(setTimeout(changeRandomNumber, 200));
    };
    const startBingo = () => {
        changeRandomNumber();
    };
 
    const saveCellFlags = (index) => {
        if(index < 0){
            return;
        }
        const flags = Array.from(cellFlags);
        flags[index] = true;
        setCellFlags(flags);
    };
    const stopBingo = () => {
        saveCellFlags(randomNumber);
        setRandomNumber(-1);
        clearTimeout(intervalId);
    };
 
    const resetBingo = () => {
        stopBingo();
        setCellFlags(initialFlags);
    }
 
    return (
        <BingoGameContext.Provider value={{
            randomNumber,
            setRandomNumber,
            rouletteSize,
            setRouletteSize,
            startBingo,
            stopBingo,
            resetBingo,
            cellFlags
        }}>
            {children}
        </BingoGameContext.Provider>
    );
};
