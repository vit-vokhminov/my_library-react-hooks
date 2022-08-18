import React from "react";

// Hook
function useScript(src) {
    // Keep track of script status ("idle", "loading", "ready", "error")
    const [status, setStatus] = React.useState(src ? "loading" : "idle");
    
    React.useEffect(
        () => {
            // Allow falsy src value if waiting on other data needed for
            // constructing the script URL passed to this hook.
            if (!src) {
                setStatus("idle");
                return;
            }
            // Fetch existing script element by src
            // It may have been added by another intance of this hook
            let script = document.querySelector(`script[src="${src}"]`);
            if (!script) {
                // Create script
                script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.setAttribute("data-status", "loading");
                // Add script to document body
                document.body.appendChild(script);
                // Store status in attribute on script
                // This can be read by other instances of this hook
                const setAttributeFromEvent = (event) => {
                    script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
                };
                script.addEventListener("load", setAttributeFromEvent);
                script.addEventListener("error", setAttributeFromEvent);
            } else {
                // Grab existing script status from attribute and set to state.
                setStatus(script.getAttribute("data-status"));
            }
            // Script event handler to update status in state
            // Note: Even if the script already exists we still need to add
            // event handlers to update the state for *this* hook instance.
            const setStateFromEvent = (event) => {
                setStatus(event.type === "load" ? "ready" : "error");
            };
            // Add event listeners
            script.addEventListener("load", setStateFromEvent);
            script.addEventListener("error", setStateFromEvent);
            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener("load", setStateFromEvent);
                    script.removeEventListener("error", setStateFromEvent);
                }
            };
        },
        [src] // Only re-run effect if script src changes
    );
    return status;
}

// Usage
function App() {
    const status = useScript("https://pm28k14qlj.codesandbox.io/test-external-script.js");

    return (
        <div>
            <h2>useScript</h2>

            <div>
                Script status: <b>{status}</b>
            </div>
            {status === "ready" && (
                <div>
                    Script function call response: <b>-----тут можно что-то сделать-----</b>
                </div>
            )}

            <p>Этот хук позволяет очень легко и динамически загружать внешний скрипт и знать, когда он загружен. 
                Это полезно, когда нужно взаимодействовать со сторонней библиотекой (Stripe, Google Analytics и т.д.), 
                И нужно загрузить скрипт при необходимости, а не включать его в заголовок документа для каждого запроса страницы. 
                В приведенном примере мы ждем, пока скрипт успешно загрузится, прежде чем вызывать функцию, 
                объявленную в скрипте.</p>
        </div>
    );
}

export default App;
