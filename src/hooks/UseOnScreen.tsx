import React, {MutableRefObject  } from "react";

export function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean {
    const [isIntersecting, setIntersecting] = React.useState<boolean>(false);

    React.useLayoutEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);
    return isIntersecting;
}

function UseOnScreenExample() {
    const ref: any = React.useRef<HTMLDivElement>();

    const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-300px");

    return (
        <div>
            <h2>useOnScreen</h2>
            <div style={{ height: "100vh" }}>
                <h1>Scroll down to next section 👇</h1>
            </div>
            <div
                ref={ref}
                style={{
                    height: "100vh",
                    backgroundColor: onScreen ? "#23cebd" : "#efefef",
                }}
            >
                {onScreen ? (
                    <div>
                        <h1>Hey I'm on the screen</h1>
                        <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
                    </div>
                ) : (
                    <h1>Scroll down 300px from the top of this section 👇</h1>
                )}
            </div>
        </div>
    );
}

export default UseOnScreenExample;
