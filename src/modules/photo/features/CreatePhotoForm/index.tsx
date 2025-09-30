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
import { useForm } from "react-hook-form";

interface CreatePhotoFormData {
  title: string;
  files: File[];
}

export const CreatePhotoForm: React.FC = () => {
  const { isOpenModalForm, toggleModalForm } = usePhotoStore();
  const { mutate, isSuccess, isError, isPending } = useUploadPhoto();
  
  const [_, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
    trigger
  } = useForm<CreatePhotoFormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      files: []
    }
  });

  const handleFilesChange = (files: File[]) => {
    console.log('Selected files:', files);
    setUploadedFiles(files);
    setValue("files", files, { shouldValidate: true });
    trigger("files");
  };

  const onSubmit = async (data: CreatePhotoFormData) => {
    console.log('Form data:', data);
    
    if (data.files.length === 0) {
      console.warn('No files selected');
      return;
    }

    // Загружаем все файлы последовательно
    for (const file of data.files) {
      mutate(file, {
        onSuccess: () => {
          // Небольшая задержка между загрузками
          return new Promise(resolve => setTimeout(resolve, 1000));
        }
      });
    }

    // Сбрасываем форму после успешной отправки
    if (!isPending) {
      reset();
      setUploadedFiles([]);
    }
  };

  const handleCloseModal = () => {
    reset();
    setUploadedFiles([]);
    toggleModalForm();
  };


  return (
    <Card className="w-full">
      <TitleTextGroup title="Фотографии" text="Добавить фотографию" gap="sm" />
      <Button onClick={toggleModalForm}>Добавить фотографию</Button>

      <Modal
        isOpen={isOpenModalForm}
        onClose={handleCloseModal}
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <Modal.Header onClose={handleCloseModal}>
          <TitleTextGroup title="Фотографии" text="Добавить фотографию" gap="sm" />
        </Modal.Header>
        
        <Modal.Body>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input 
              placeholder="Название"
              label="Название"
              {...register("title", {
                required: "Название обязательно",
                minLength: {
                  value: 2,
                  message: "Название должно содержать минимум 2 символа"
                },
                maxLength: {
                  value: 50,
                  message: "Название не должно превышать 50 символов"
                }
              })}
              error={errors.title?.message}
            />
            
            <Upload 
              multiple
              accept=".jpg,.jpeg,.png,.gif,.webp"
              maxSize={5 * 1024 * 1024}
              onFilesChange={handleFilesChange}
              helperText="Только изображения до 5MB"
              label="Загрузите изображения"
              error={errors.files?.message}
            />
            <input
              type="hidden"
              {...register("files", {
                validate: {
                  required: (value) => value.length > 0 || "Необходимо выбрать хотя бы один файл",
                  maxFiles: (value) => value.length <= 10 || "Максимум 10 файлов"
                }
              })}
            />
          </form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button 
            variant="success"
            onClick={handleSubmit(onSubmit)}
            disabled={isPending || !isValid}
            loading={isPending}
          >
            {isPending ? "Загрузка..." : "Сохранить"}
          </Button>
          
          <AlertGroup>
            {isSuccess && (
              <Notice 
                message="Фотография загружена" 
                variant="success" 
              />
            )}
            {isError && (
              <Notice 
                message="Ошибка загрузки фотографии" 
                variant="error" 
              />
            )}
          </AlertGroup>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};