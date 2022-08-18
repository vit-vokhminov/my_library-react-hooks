import React from "react";

interface IData {
    text: string;
    count: number;
}

function UseEffectPage() {
    const [data, setData] = React.useState<IData>({} as IData);

    React.useEffect(() => {
        let col = 0;
        const interval = setInterval(() => {
            setData((prev) => ({ ...prev, text: "Счётчик: ", count: col++ }));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>useEffect</h2>

            <p>
                <b>текст: </b>
                {data.text} {data.count}
            </p>
            <br />
            <br />
            <pre>
                {`
                interface IData {
                    text: string;
                    count: number;
                }

                const [data, setData] = React.useState<IData>({} as IData);

                React.useEffect(() => {
                    let col = 0;
                    const interval = setInterval(() => {
                        setData((prev) => ({ ...prev, text: "Счётчик:", count: col++ }));
                    }, 500);
            
                    return () => clearInterval(interval);
                }, []);
                `}
            </pre>
        </div>
    );
}

export default UseEffectPage;
