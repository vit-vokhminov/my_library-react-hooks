import React from "react";

// Hook
function useKeyPress(targetKey: string): boolean {
    const [keyPressed, setKeyPressed] = React.useState(false);

    function downHandler({ key }: KeyboardEvent): void {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }: KeyboardEvent): void => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);
    return keyPressed;
}

function App() {
    const happyPress: boolean = useKeyPress("h");
    const sadPress: boolean = useKeyPress("s");
    const robotPress: boolean = useKeyPress("r");
    const foxPress: boolean = useKeyPress("f");
    
    return (
        <div>
            <h2>useKeyPress</h2>

            <div>
                Нажми на клавиатуре: <b>h</b>, <b>s</b>, <b>r</b>, <b>f</b>
            </div>
            <div>
                {happyPress && "😊"}
                {sadPress && "😢"}
                {robotPress && "🤖"}
                {foxPress && "🦊"}
            </div>
        </div>
    );
}

export default App;
