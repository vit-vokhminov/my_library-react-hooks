import React, { FunctionComponent } from "react";
import s from "./Styles.module.scss";
import { ReactSVG, CloseIcon } from "assets/images";
import { createPortal } from "react-dom";

// как передавать кастомные стили
// classes={{
//     modal: { padding: "0px", position: "fixed", top: "28px", overflow: "hidden" },
//     close: { top: "15px" },
// }}
export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    classes?: any;
    children: JSX.Element;
}

const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, classes, children, ...props }): any => {
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 27 && isShown) {
            hide();
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", onKeyDown, false);
        return () => {
            document.removeEventListener("keydown", onKeyDown, false);
        };
    }, [isShown]);

    const modal = (
        <div className={s.modal_block} {...props}>
            <div className={s.modal_overlay} onClick={hide}></div>
            <div className={s.modal} style={classes?.modal}>
                <div className={s.modal__close} style={classes?.close} onClick={hide}>
                    <ReactSVG src={CloseIcon} className="logo" />
                </div>
                <div className={s.modal__content} style={classes?.content}>
                    {children}
                </div>
            </div>
        </div>
    );

    const portalDOM = document.getElementById("portal-root") as Element;

    return isShown ? createPortal(modal, portalDOM) : null;
};

export default Modal;
