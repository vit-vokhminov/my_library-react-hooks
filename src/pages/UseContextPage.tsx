import React, { SetStateAction } from "react";

// ==================Пример (Файл Context.js):================

export interface IContext {
    isAuth: boolean;
    setIsAuth: React.Dispatch<SetStateAction<boolean>>;
}

const AuthContext = React.createContext<IContext>({} as IContext);

export function AuthProvider({ children }: any) {
    const [isAuth, setIsAuth] = React.useState<boolean>(false);

    const value = React.useMemo(
        () => ({
            isAuth,
            setIsAuth,
        }),
        [isAuth]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useContextAuth = () => React.useContext(AuthContext);

// ==================Пример (Файл ComponentA.js):================

export function ComponentA() {
    const { isAuth } = useContextAuth();

    return (
        <div>
            <p>ComponentA: {isAuth ? "Авторизован" : "Не авторизован"}</p>
        </div>
    );
}

// ==================Пример (Файл ComponentB.js):================

export function ComponentB() {
    const { isAuth, setIsAuth } = useContextAuth();
    return (
        <div>
            ComponentB: <button onClick={() => setIsAuth(!isAuth)}>Изменить значение контекста</button>
        </div>
    );
}

// ==================Пример (App.js):================

function UseContextPage() {
    return (
        <div>
            <h2>useContext</h2>

            <AuthProvider>
                <ComponentA />
                <ComponentB />
            </AuthProvider>
        </div>
    );
}

export default UseContextPage;
