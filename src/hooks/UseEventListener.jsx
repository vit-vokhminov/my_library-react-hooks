import React from "react";

// Hook
function useEventListener(eventName, handler, element = window) {
    const savedHandler = React.useRef();

    React.useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    React.useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        const eventListener = (event) => savedHandler.current(event);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}


function App() {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });

    const handler = React.useCallback(
        ({ clientX, clientY }) => {
            setCoords({ x: clientX, y: clientY });
        },
        [setCoords]
    );

    useEventListener("mousemove", handler);

    return (
        <div>
            <h2>useEventListener</h2>
            <p>
                Координаты курсора: ({coords.x}, {coords.y})
            </p>
            <p>
                Если нужно добавить много слушателей событий, используй этот хук. В приведенном примере создается хук
                useEventListener, который обрабатывает событие addEventListener, добавляет переданный слушатель событий и удаляет при очистке.
            </p>
        </div>
    );
}

export default App;
