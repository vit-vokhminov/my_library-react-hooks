import React from "react";
// https://developer.marvel.com/account#
// https://developer.marvel.com/docs#!/public/getComicsCollection_get_6

// Hook
export function useThrottle<T>(value: T, interval = 500): T {
    const [throttledValue, setThrottledValue] = React.useState<T>(value);
    const lastExecuted = React.useRef<number>(Date.now());

    React.useEffect(() => {
        if (Date.now() >= lastExecuted.current + interval) {
            lastExecuted.current = Date.now();
            setThrottledValue(value);
        } else {
            const timerId = setTimeout(() => {
                lastExecuted.current = Date.now();
                setThrottledValue(value);
            }, interval);

            return () => clearTimeout(timerId);
        }
    }, [value, interval]);

    return throttledValue;
}

// API search function
function searchCharacters(search: string): Promise<any[]> {
    const apiKey = "5477876cd30572aca6cb1fedb10a372a";
    return fetch(`https://gateway.marvel.com/v1/public/comics?titleStartsWith=${search}&apikey=${apiKey}`, {
        method: "GET",
    })
        .then((r) => r.json())
        .then((r) => r.data.results)
        .catch((error) => {
            console.error(error);
            return [];
        });
}

function App() {
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const [results, setResults] = React.useState<any[]>([]);
    const [isSearching, setIsSearching] = React.useState<boolean>(false);

    const debouncedSearchTerm: string = useThrottle<string>(searchTerm, 500);

    React.useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);
            searchCharacters(debouncedSearchTerm).then((results) => {
                setIsSearching(false);
                setResults(results);
            });
        } else {
            setResults([]);
            setIsSearching(false);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <h2>useThrottle</h2>
            <p>Троттлинг предотвращает запуск функции, если она уже запускалась недавно. Троттлинг также обеспечивает регулярность выполнение функции с заданной периодичностью.</p>
            <input placeholder="Search Marvel Comics" onChange={(e) => setSearchTerm(e.target.value)} />
            {isSearching && <div>Searching ...</div>}
            {results.map((result) => (
                <div key={result.id}>
                    <h4>{result.title}</h4>
                    <img src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`} />
                </div>
            ))}
        </div>
    );
}

export default App;
