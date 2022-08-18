import React from "react";

// Hook
const useAsync = <T, E = string>(asyncFunction: () => Promise<T>, immediate = true) => {
    const [status, setStatus] = React.useState<"idle" | "pending" | "success" | "error">("idle");
    const [value, setValue] = React.useState<T | null>(null);
    const [error, setError] = React.useState<E | null>(null);

    const execute = React.useCallback(() => {
        setStatus("pending");
        setValue(null);
        setError(null);
        return asyncFunction()
            .then((response: any) => {
                setValue(response);
                setStatus("success");
            })
            .catch((error: any) => {
                setError(error);
                setStatus("error");
            });
    }, [asyncFunction]);

    React.useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);
    return { execute, status, value, error };
};


const myFunction = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            rnd <= 5 ? resolve("Submitted successfully 🙌") : reject("Oh no there was an error 😞");
        }, 2000);
    });
};

function App() {
    const { execute, status, value, error } = useAsync<string>(myFunction, false);
    return (
        <div>
            <h2>useAsync</h2>
            
            {status === "idle" && <div>Вызвать асинхронную функцию</div>}
            {status === "pending" && <div>Ожидание выполнения</div>}
            {status === "success" && <div>{value}</div>}
            {status === "error" && <div>{error}</div>}
            
            <button onClick={execute} disabled={status === "pending"}>
                {status !== "pending" ? "Click me" : "Loading..."}
            </button>
            <div>status вызова: {status}</div>

            <p>Если при асинхронном запросе нужно указывать статусы запроса, можно использовать этот хук. </p>
        </div>
    );
}

export default App;
