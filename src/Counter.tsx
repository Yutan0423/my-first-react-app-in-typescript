import React, { useEffect, useRef, useState } from 'react';

const array: Array<number> = [1, 2, 3];
const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
array[0] = 12;
// readonlyArray[0] = 12;

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (value <= 0) return;
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    console.log('render');
    renderTimes.current++;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
