import React, { RefObject } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
    elementRef: RefObject<Element>,
    { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }: Args
): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = React.useState<IntersectionObserverEntry>();

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    React.useEffect(() => {
        const node = elementRef?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();
    }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

    return entry;
}

const arrBlock = [
    "https://postila.ru/data/e2/22/d7/ae/e222d7ae31c679fb2ad67325b9bd52522122018ea43309d4bbe7fb76fdb92410.jpg",
    "https://klike.net/uploads/posts/2019-11/1574605311_20.jpeg",
    "https://i.artfile.ru/5000x4000_934157_[www.ArtFile.ru].jpg",
    "https://img3.goodfon.ru/wallpaper/original/5/b4/prince-of-persia-the-two-1291.jpg",
    "https://bradshomefurnishings.com/wp-content/uploads/2018/11/off-backyard-spray-backyard-fly-spray-different-backyard-fly-spray-with-details-of-off-backyard-spray-1.jpg",
    "https://clipart-db.ru/file_content/rastr/city_036.jpg",
];

const Section = (props: { title: string; url: string }) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    console.log(`Render Section ${props.title}`, { isVisible });

    return (
        <div
            ref={ref}
            style={{
                minHeight: "100vh",
                display: "flex",
                border: "1px dashed #000",
                fontSize: "2rem",
                position: "relative",
            }}
        >
            <div style={{ position: "absolute" }}>{props.title}</div>
            {/* <img src={props.url} loading="lazy" style={{ objectFit: "cover" }} /> */}
            <LazyLoadImage
                alt=""
                //height=""
                //width=""
                effect="blur"
                src={props.url}
                style={{ objectFit: "cover" }}
            />
        </div>
    );
};

function App() {
    return (
        <>
            <h2>UseIntersectionObserver</h2>
            <p>
                Этот хук определяет видимость компонента на экране с помощью API IntersectionObserver, изначально присутствующего в
                браузере. Это может быть очень полезно для ленивой загрузки изображений, реализации "бесконечной прокрутки" или запуска
                анимации.
            </p>
            <p>Для ленивой загрузки изображений испульзуется библиотека react-lazy-load-image-component</p>
            <p>
                <i>npm i --save react-lazy-load-image-component</i>
            </p>
            <p>
                <i>npm i --save-dev @types/react-lazy-load-image-component</i>
            </p>
            {arrBlock.map((url, index) => (
                <Section key={index + 1} title={`${index + 1}`} url={url} />
            ))}
        </>
    );
}

export default App;
