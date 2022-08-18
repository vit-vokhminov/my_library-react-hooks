import React from "react";

interface IData {
    text: string;
}

function UseLayoutEffectPage() {
    const [data, setData] = React.useState<IData>({} as IData);

    const elemRef = React.useRef<HTMLParagraphElement>(null);

    React.useLayoutEffect(() => {
        setData((prev) => ({ ...prev, text: "useLayoutEffect"}));
    }, []);

    React.useEffect(() => {
        setData((prev) => ({ ...prev, text: "useEffect" }));
    }, []);

    return (
        <div>
            <h2>useLayoutEffect</h2>
            <p><i>useLayoutEffect</i> грузится ещё до подгрузки приложения и до <i>useEffect</i>.</p>
            
            <p ref={elemRef}>Результат: <b>{data.text}</b></p>

            <p>Сначала отработает <i>useLayoutEffect</i>, затем <i>useEffect</i> и перезатрёт текст <i>useLayoutEffect</i>.</p>
            
            <pre>
                {`
                interface IData {
                    text: string;
                }

                const [data, setData] = React.useState<IData>({} as IData);

                const elemRef = React.useRef<HTMLParagraphElement>(null);
            
                React.useLayoutEffect(() => {
                    setData((prev) => ({ ...prev, text: "useLayoutEffect"}));
                }, []);
            
                React.useEffect(() => {
                    setData((prev) => ({ ...prev, text: "useEffect" }));
                }, []);
                `}
            </pre>
        </div>
    );
}

export default UseLayoutEffectPage;
