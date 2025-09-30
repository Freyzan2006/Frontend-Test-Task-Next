"use client";

import { Button } from "@ui-kit/ui/Button";
import { Modal } from "@ui-kit/ui/Modal";

import { Card } from "@ui-kit/ui/Card";
import { TitleTextGroup } from "@ui-kit/ui/Font";
import { Upload } from "@ui-kit/widget/Upload";
import { useState } from "react";
import { Input } from "@ui-kit/ui/Input";
import { usePhotoStore } from "@modules/photo/store/photo.store";
import { useUploadPhoto } from "@modules/photo/hooks/useUploadPhoto.hook";
import { Notice } from "@ui-kit/ui/Notice";
import { AlertGroup } from "@ui-kit/ui/Alert";


export const CreatePhotoForm: React.FC = () => {

    const { isOpenModalForm, toggleModalForm } = usePhotoStore();
    const { mutate, isSuccess, isError } = useUploadPhoto()

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleFilesChange = (files: File[]) => {
      console.log('Selected files:', files);
      setUploadedFiles(files);
    };
  
    const handleUpload = async (files: File[]) => {
      console.log('Uploading files:', files);

      for (const file of files) {
        mutate(file);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      console.log('Files uploaded successfully');
    };

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
            <Modal.Header onClose={toggleModalForm}>
                <TitleTextGroup title="Фотографии" text="Добавить фотографию" gap="sm" />
            </Modal.Header>
            <Modal.Body>
                <form className="flex flex-col gap-4">
                    <Input placeholder="Название" label="Название" />
                    <Upload 
                        multiple
                        accept=".jpg,.jpeg,.png,.gif,.webp"
                        maxSize={5 * 1024 * 1024} 
                        onFilesChange={handleFilesChange}
                        helperText="Только изображения до 5MB"
                        label="Загрузите изображения"
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant={"success"}
                    onClick={() => handleUpload(uploadedFiles)}
                >
                    Сохранить
                </Button>
                
                <AlertGroup>
                    { isSuccess && <Notice message="Фотография загружена" variant={"success"} /> }
                    { isError && <Notice message="Ошибка загрузки фотографии" variant={"error"} /> }
                </AlertGroup>
            </Modal.Footer>
            </Modal>
        
        </Card>
    )
}