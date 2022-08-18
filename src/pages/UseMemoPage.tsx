import React from "react";

const sum = (n: number) => {
    return n + n;
};

function UseMemoPage() {
    const [num, setNum] = React.useState(1);
    const [isGreen, setIsGreen] = React.useState(true);
    const result = React.useMemo(() => sum(num), [num]);
   
    return (
        <div>
            <h1>useMemo</h1>
            <p style={{ color: isGreen ? "green" : "red" }}><b>Example</b></p>
            <button onClick={() => setIsGreen(!isGreen)}>Изменить цвет</button>
            <h2>Sum {result}</h2>
            <button onClick={() => setNum(num + 1)}>➕</button>

            <br />
            <br />
            <p>Сначала произойдёт вызов функции, данные закешируются. Сдедующий вызов произойдёт только при изменении зависимостей.</p>
            <p>useMemo – кэширует значение между визуализациями.</p>
            
        </div>
    );
}

export default UseMemoPage;
