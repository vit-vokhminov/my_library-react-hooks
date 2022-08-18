import React from "react";

// ================== Сам хук ================

type TypeSize = {
    width: number | undefined;
    height: number | undefined;
};

export function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState<TypeSize>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

// ================== Пример использования в компоненте ================

function UseWindowSizeExample() {
    const size = useWindowSize();

    return (
        <div>
            <h2>useWindowSize</h2>
            <p>
                Получить <b>width</b> и <b>height</b> экрана. Имеется обсервер ресайза страницы.
            </p>
            <div>
                width {size.width}px / height {size.height}px
            </div>
        </div>
    );
}

export default UseWindowSizeExample;
