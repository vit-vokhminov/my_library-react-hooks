import React from "react";
import s from "./Styles.module.scss";

function ModalTextarea({ hide }: any) {
    return (
        <div className={s.main}>
            <div className={s.title}>Заголовок</div>
            <div className={s.description}>Любое описание.</div>

            <div className={s.buttons_actions}>
                <button onClick={hide}>Закрыть</button>
                <button type="submit" style={{ marginLeft: "16px" }}>
                    Отправить
                </button>
            </div>
        </div>
    );
}

export default ModalTextarea;
