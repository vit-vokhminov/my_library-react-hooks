import React, { ChangeEvent } from "react";

// ================== Сам хук ================

export function useInput(initialValue: string) {
    const [value, setValue] = React.useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    };
    const bind = {
        value: value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    };

    return { value, reset, bind };
}

// ================== Пример использования в компоненте ================

function App() {
    const { value, reset, bind } = useInput("");

    return (
        <div>
            <h2>useInput</h2>
            
            <input type="text" {...bind} />
            <button type="button" onClick={reset}>Очистить инпут</button>
            <p>{value}</p>
            <p>Логика записи в инпут, описана в одном хуке.</p>
        </div>
    );
}

export default App;
