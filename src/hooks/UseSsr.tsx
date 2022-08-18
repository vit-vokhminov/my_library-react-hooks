import React from "react";

function useSsr() {
    const isDOM = typeof window !== "undefined" && window.document && window.document.documentElement;

    return {
        isBrowser: isDOM,
        isServer: !isDOM,
    };
}

function App() {
    const { isBrowser } = useSsr();

    return (
        <>
            <h2>useSsr</h2>
            <p>{isBrowser ? "Browser" : "Server"}!</p>

            <p>Быстро узнайть, где выполняется код;</p>
        </>
    );
}

export default App;
