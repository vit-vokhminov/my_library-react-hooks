import React from "react";

function Child({ updateOne, updateTwo }: any) {
    React.useEffect(() => {
        updateOne();
    }, [updateOne]);

    React.useEffect(() => {
        updateTwo();
    }, [updateTwo]);

    return <div className="App" />;
}

function UseCallbackPage() {
    const [counter, setCounter] = React.useState(0);
    const [counterTwo, setCounterTwo] = React.useState(0);

    const updateOne = () => {
        console.log("Я не мемоизирован");
    };

    const updateTwo = React.useCallback(() => {
        console.log("Я мемоизирован!");
    }, [counter]); 

    return (
        <div>
            <h1>useCallback</h1>
            <button onClick={() => setCounter(counter + 1)}>One</button>
            <br />
            <button onClick={() => setCounterTwo(counterTwo + 1)}>Two</button>
            <Child updateOne={updateOne} updateTwo={updateTwo} />

            <p><i>В консоли сейчас выводятся поясняющие логи.</i></p>
            <p>
                useCallback кеширует ссылку на функцию. Это полезно если функция передайтся как props, и при
                перерендеринге копонента, не создаётся новая функция. Значит дечерние компоненты не будут перерендерены.
            </p>
            <p>useCallback – кэширует экземпляр функции между визуализациями.</p>
        </div>
    );
}

export default UseCallbackPage;
