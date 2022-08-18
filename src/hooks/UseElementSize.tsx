import React from "react";

interface Size {
    width: number;
    height: number;
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [(node: T | null) => void, Size] {
    const [ref, setRef] = React.useState<T | null>(null);
    const [size, setSize] = React.useState<Size>({
        width: 0,
        height: 0,
    });

    React.useLayoutEffect (() => {
        function handleResize() {
            setSize({
                width: ref?.offsetWidth || 0,
                height: ref?.offsetHeight || 0,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [ref]);

    return [setRef, size];
}

function App() {
    const [isVisible, setVisible] = React.useState(true);
    const [squareRef, { width, height }] = useElementSize();

    const toggleVisibility = () => setVisible((x) => !x);

    return (
        <>
            <p>{`Ширина: ${width}px, высота: ${height}px`}</p>
            <p>Попробуй изменить размер окна или нажми на кнопку.</p>

            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"} square</button>

            {isVisible && (
                <div
                    ref={squareRef}
                    style={{
                        width: "50%",
                        paddingTop: "50%",
                        backgroundColor: "aquamarine",
                        margin: "auto",
                    }}
                />
            )}
        </>
    );
}

export default App;
