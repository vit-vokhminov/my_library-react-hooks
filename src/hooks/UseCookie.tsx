import React from "react";
import Cookies from "js-cookie";

// ================== Сам хук ================

export function useCookie(name: string, initialValue: any) {
    const [value, setValue] = React.useState(() => {
        const cookie = Cookies.get(name);
        if (cookie) return cookie;

        Cookies.set(name, initialValue);

        return initialValue;
    });

    const updateCookie = React.useCallback(
        (newValue: any, options: any) => {
            Cookies.set(name, newValue, options);
            setValue(newValue);
        },
        [name]
    );

    const deleteCookie = React.useCallback(() => {
        Cookies.remove(name);
        setValue(null);
    }, [name]);

    return [value, updateCookie, deleteCookie];
}

// ================== Пример использования в компоненте ================

function App() {
    const [value, updateCookie, deleteCookie] = useCookie("token", "");

    return (
        <div>
            <h2>useCookie</h2>
            <p>
                <i>npm i js-cookie</i><br />
                <i>npm i --save-dev @types/js-cookie</i>
            </p>

            <p>Token: {value}</p>
            <button onClick={() => updateCookie(String(new Date()))}>Установить токен</button>
            <button onClick={deleteCookie}>Удалить токен</button>
        </div>
    );
}

export default App;
