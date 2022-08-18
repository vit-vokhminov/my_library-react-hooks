import React from "react";

// ================== Сам хук ================

export function useFetch(url: string) {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        setIsLoading(true);
        try {
            const fetchData = async () => {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            };
            fetchData();
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return { data, isLoading, error };
}

// ================== Пример использования в компоненте ================

function App() {
    const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/users/1");

    return (
        <div>
            <h2>UseFetch</h2>
            <div>Data: <br/>{JSON.stringify(data)}</div>
            <div>Loading: {isLoading}</div>
            <div>error: {error}</div>
        </div>
    );
}

export default App;
