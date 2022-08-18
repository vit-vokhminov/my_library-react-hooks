import React, { MutableRefObject } from "react";

// ================== Сам хук ================

export function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = React.useState<boolean>(false);
    const ref: any = React.useRef<T | null>(null);

    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);

    React.useEffect(() => {
        const node: any = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, [ref.current]);
    
    return [ref, value];
}

// ================== Пример использования в компоненте ================

function UseHoverExample() {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    return (
        <div>
            <h2>useHover</h2>
            <p>Hover на js</p>
            <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>
        </div>
    );
}

export default UseHoverExample;
