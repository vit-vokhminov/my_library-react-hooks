import React from "react";

export function usePrevious<T>(value: T): T {
    const ref: any = React.useRef<T>();

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

function UsePreviousExample() {
    const [count, setCount] = React.useState<number>(0);
    const prevCount: number = usePrevious<number>(count);

    const decrement = () => {
        setCount(count - 1);
    };
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>usePrevious</h2>

            <p><b>{count}</b></p>
            <p>
                Новое значение: <b>{count}</b>, предыдущее значение: <b>{prevCount}</b>
            </p>
            <p>Получить предыдущее значение</p>
            <button onClick={() => decrement()}>Минус</button>
            <button onClick={() => increment()}>Плюс</button>
        </div>
    );
}

export default UsePreviousExample;
