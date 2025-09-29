"use client";

import { Button } from "@ui-kit/ui/Button";
import { Modal } from "@ui-kit/ui/Modal";
import { usePhotoStore } from "../store/photo.store";
import { Card } from "@ui-kit/ui/Card";
import { TitleTextGroup } from "@ui-kit/ui/Font";


export const CreatePhotoForm: React.FC = () => {

    const { isOpenModalForm, toggleModalForm } = usePhotoStore();

    return (
        <Card>
            <TitleTextGroup title="Фотографии" text="Добавить фотографию" gap="sm" />
            <Button onClick={toggleModalForm}>Добавить фотографию</Button>



            <Modal
                isOpen={isOpenModalForm}
                onClose={toggleModalForm}
                closeOnOverlayClick={true}
                closeOnEscape={true}
            >
            <Modal.Header onClose={toggleModalForm}>Header</Modal.Header>
            <Modal.Body>Body</Modal.Body>
            <Modal.Footer>Footer</Modal.Footer>
            </Modal>
        
        </Card>
    )
}