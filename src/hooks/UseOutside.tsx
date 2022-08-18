import React, { Dispatch, SetStateAction } from "react";

// ================== Сам хук ================

type TypeOut = {
    ref: any,
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const useOutside = (initialValue: boolean): TypeOut => {
    const [isShow, setIsShow] = React.useState(initialValue);
    const ref = React.useRef<HTMLElement>(null);

    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            e.preventDefault();
            e.stopPropagation();
            setIsShow(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isShow, setIsShow };
};

// ================== Пример использования в компоненте ================

function UseOutsideExample() {
    const { ref, isShow, setIsShow } = useOutside(false);

    const handleBurger = () => {
        setIsShow(!isShow);
    };

    return (
        <div>
            <h2>useOutside</h2>

            <button onClick={() => handleBurger()}>Бургер</button>

            {isShow && (
                <div ref={ref} style={{ position: "relative" }}>
                    <div style={{ width: "200px", height: "200px", background: "#238d23", position: "absolute" }}></div>
                </div>
            )}
        </div>
    );
}

export default UseOutsideExample;
