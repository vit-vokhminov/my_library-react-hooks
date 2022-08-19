import React from "react";

export const useModal = () => {
    const [isShown, setIsShown] = React.useState<boolean>(false);

    const getScrollbarWidth = () => {
        const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

        if (hasScrollbar) {
            const div = document.createElement("div");
            div.style.overflowY = "scroll";
            div.style.width = "50px";
            div.style.height = "50px";
            // мы должны вставить элемент в документ, иначе размеры будут равны 0
            document.body.append(div);
            const scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }
        return 0;
    };

    const toggle = () => {
        if (isShown) {
            document.body.style.overflow = "";
            document.body.style.paddingRight = `0px`;
            setIsShown(false);
        } else {
            document.body.style.paddingRight = `${getScrollbarWidth()}px`;
            document.body.style.overflow = "hidden";
            setIsShown(true);
        }
    };

    const close = () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
        setIsShown(false);
    };
    const open = () => {
        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        document.body.style.overflow = "hidden";
        setIsShown(true);
    };
    return {
        isShown,
        toggle,
        close,
        open,
    };
};
