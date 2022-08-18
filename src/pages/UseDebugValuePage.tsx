import React from "react";

function useName() {
    const [name, setName] = React.useState<any>("");

    // Показывать ярлык в DevTools рядом с этим хуком
    // например, «наличие имени: без имени»
    React.useDebugValue(name ? "Имя есть" : "Без имени");

    return { name, setName };
}

function UseDebugValuePage() {
    const { name, setName } = useName();

    return (
        <>
            <h1>useDebugValue</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <br />
            <br />
            <p>В консоли, в разделе components, можно увидеть UseDebugValuePage</p>
            <pre>
                {`
            hooks
                Name: "Имя есть"
            `}
            </pre>
        </>
    );
}

export default UseDebugValuePage;
