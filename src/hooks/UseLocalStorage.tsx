import React from "react";

// ================== Сам хук ================

export const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = React.useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        }
        return initialValue;
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

// ================== Пример использования в компоненте ================

function LocalStorageExample() {
    const [todo, setTodo] = useLocalStorage("todo", "Залупа");

    const handleTodo = () => {
        if (todo === "Залупа") {
            setTodo("Хуй");
        } else {
            setTodo("Залупа");
        }
    };

    return (
        <div>
            <h2>useLocalStorage</h2>

            <p>{todo}</p>
            <button onClick={() => handleTodo()}>Изменить значение localStorage</button>
        </div>
    );
}

export default LocalStorageExample;
