import React from "react";
import Modal from "components/Modals/index";
import ModalTextarea from "components/Modals/ModalTextarea";
import ModalBigContent from "components/Modals/ModalBigContent";
import { useModal } from "hooks/useModal";
import { useModal as useModalGitText } from "hooks/useModal";

function ModalPage() {
    const { isShown, toggle } = useModal();
    const { isShown: isShownModalBigContent, toggle: toggleModalBigContent } = useModalGitText();

    const openModal = () => toggle();
    const openModalBigContent = () => toggleModalBigContent();

    return (
        <div>
            <h1>useModal</h1>
            <button type="button" onClick={openModal}>
                Простое модальное окно
            </button>

            <Modal isShown={isShown} hide={toggle}>
                <ModalTextarea hide={toggle} />
            </Modal>

            <br />
            <br />

            <button type="button" onClick={openModalBigContent}>
                Модальное окно с большим контентом
            </button>

            <Modal isShown={isShownModalBigContent} hide={openModalBigContent}>
                <ModalBigContent hide={openModalBigContent} />
            </Modal>
        </div>
    );
}

export default ModalPage;
