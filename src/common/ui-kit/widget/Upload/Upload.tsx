"use client";

import React, { useState, useRef, useId } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { Button } from '@ui-kit/ui/Button';
import { Text } from '@ui-kit/ui/Font';
import { uploadVariants } from './variants';
import { Loading } from '@ui-kit/ui/Loading';


interface FileInfo {
  file: File;
  id: string;
  progress?: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

interface UploadProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>,
    VariantProps<typeof uploadVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  multiple?: boolean;
  accept?: string;
  maxSize?: number; 
  onFilesChange?: (files: File[]) => void;
  onUpload?: (files: File[]) => Promise<void>;
  showFileList?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ 
    className,
    variant,
    size,
    label,
    helperText,
    error,
    success,
    multiple = false,
    accept,
    maxSize,
    onFilesChange,
    onUpload,
    showFileList = true,
    disabled = false,
    icon,
    ...props 
  }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<FileInfo[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId();

    const finalVariant = error ? 'error' : success ? 'success' : variant;

    const handleFileSelect = (selectedFiles: FileList | null) => {
      if (!selectedFiles) return;

      const fileArray = Array.from(selectedFiles);
      const validFiles: FileInfo[] = [];

      for (const file of fileArray) {
        // Проверка размера файла
        if (maxSize && file.size > maxSize) {
          const errorFile: FileInfo = {
            file,
            id: Math.random().toString(36).substr(2, 9),
            status: 'error',
            error: `Файл слишком большой. Максимальный размер: ${formatFileSize(maxSize)}`
          };
          validFiles.push(errorFile);
          continue;
        }

        // Проверка типа файла
        if (accept && !isFileTypeAccepted(file, accept)) {
          const errorFile: FileInfo = {
            file,
            id: Math.random().toString(36).substr(2, 9),
            status: 'error',
            error: 'Неподдерживаемый формат файла'
          };
          validFiles.push(errorFile);
          continue;
        }

        const fileInfo: FileInfo = {
          file,
          id: Math.random().toString(36).substr(2, 9),
          status: 'pending'
        };
        validFiles.push(fileInfo);
      }

      const newFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(newFiles);
      onFilesChange?.(newFiles.map(f => f.file));
    };

    const isFileTypeAccepted = (file: File, acceptString: string): boolean => {
      const acceptTypes = acceptString.split(',').map(type => type.trim());
      return acceptTypes.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type.match(type.replace('*', '.*'));
      });
    };

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled) return;
      handleFileSelect(e.dataTransfer.files);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(e.target.files);
      // Сбрасываем значение input чтобы можно было выбрать тот же файл снова
      e.target.value = '';
    };

    const handleRemoveFile = (fileId: string) => {
      const newFiles = files.filter(f => f.id !== fileId);
      setFiles(newFiles);
      onFilesChange?.(newFiles.map(f => f.file));
    };

    const handleUpload = async () => {
      if (!onUpload || files.length === 0) return;

      setIsUploading(true);
      const pendingFiles = files.filter(f => f.status === 'pending');

      // Обновляем статус файлов на uploading
      setFiles(prev => prev.map(f => 
        pendingFiles.some(pf => pf.id === f.id) 
          ? { ...f, status: 'uploading', progress: 0 }
          : f
      ));

      try {
        await onUpload(pendingFiles.map(f => f.file));
        
        // Обновляем статус на success
        setFiles(prev => prev.map(f => 
          pendingFiles.some(pf => pf.id === f.id) 
            ? { ...f, status: 'success', progress: 100 }
            : f
        ));
      } catch (error) {
        // Обновляем статус на error
        setFiles(prev => prev.map(f => 
          pendingFiles.some(pf => pf.id === f.id) 
            ? { ...f, status: 'error', error: 'Ошибка загрузки' }
            : f
        ));
      } finally {
        setIsUploading(false);
      }
    };

    const triggerFileInput = () => {
      fileInputRef.current?.click();
    };

    const getStatusIcon = (status: FileInfo['status']) => {
      switch (status) {
        case 'uploading':
          return <Loading size="sm" />;
        case 'success':
          return (
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          );
        case 'error':
          return (
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          );
        default:
          return icon || (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          );
      }
    };

    const hasPendingFiles = files.some(f => f.status === 'pending');
    const canUpload = onUpload && hasPendingFiles && !isUploading;

    return (
      <div className="w-full space-y-3">
        {/* Скрытый input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled}
          className="hidden"
          {...props}
        />

        {/* Основная область загрузки */}
        <div
          className={uploadVariants({
            variant: finalVariant,
            size,
            className: `
              ${className}
              ${isDragging ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `
          })}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={disabled ? undefined : triggerFileInput}
        >
          <div className="text-center p-6">
            {getStatusIcon('pending')}
            
            <Text className="mt-2 font-medium">
              {label || 'Перетащите файлы сюда или нажмите для выбора'}
            </Text>
            
            <Text variant="muted" size="sm" className="mt-1">
              {helperText || `Поддерживаемые форматы: ${accept || 'любые'}`}
              {maxSize && ` • Макс. размер: ${formatFileSize(maxSize)}`}
            </Text>

            <Button
              variant="primary"
              size="sm"
              className="mt-4"
              disabled={disabled}
              onClick={triggerFileInput}
            >
              Выбрать файлы
            </Button>
          </div>
        </div>

        {/* Список файлов */}
        {showFileList && files.length > 0 && (
          <div className="space-y-2">
            {files.map((fileInfo) => (
              <div
                key={fileInfo.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {getStatusIcon(fileInfo.status)}
                  
                  <div className="flex-1 min-w-0">
                    <Text size="sm" className="truncate">
                      {fileInfo.file.name}
                    </Text>
                    <Text variant="muted" size="xs">
                      {formatFileSize(fileInfo.file.size)}
                      {fileInfo.error && ` • ${fileInfo.error}`}
                    </Text>
                    
                    {/* Прогресс бар */}
                    {fileInfo.status === 'uploading' && fileInfo.progress !== undefined && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${fileInfo.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {fileInfo.status !== 'uploading' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 flex-shrink-0"
                    onClick={() => handleRemoveFile(fileInfo.id)}
                    icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>} children={undefined} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Кнопка загрузки */}
        {canUpload && (
          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={handleUpload}
              loading={isUploading}
            >
              Загрузить файлы
            </Button>
          </div>
        )}

        {/* Сообщение об ошибке */}
        {error && (
          <Text variant="error" size="sm" className="px-1">
            {error}
          </Text>
        )}
      </div>
    );
  }
);

Upload.displayName = 'Upload';

export { Upload };
export type { UploadProps, FileInfo };