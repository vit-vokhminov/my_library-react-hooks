import React from "react";
// https://developer.marvel.com/account#
// https://developer.marvel.com/docs#!/public/getComicsCollection_get_6

// Hook
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

    React.useEffect(() => {
        const timer  = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    
    return debouncedValue;
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

    const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

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
            <h2>useDebounce</h2>
            <p>Debouncing функции означает, что все вызовы будут игнорироваться до тех пор, пока они не прекратятся на определённый период времени.</p>
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
