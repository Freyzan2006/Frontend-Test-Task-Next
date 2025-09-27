import { useState } from "react";
import { NoticeProps } from ".";



// Hook для управления уведомлениями
interface NoticeOptions extends Omit<NoticeProps, 'message' | 'onClose'> {
  id?: string;
}

export const useNotice = () => {
  const [notices, setNotices] = useState<Array<NoticeOptions & { id: string; message: string }>>([]);

  const showNotice = (message: string, options: NoticeOptions = {}) => {
    const id = options.id || Math.random().toString(36).substr(2, 9);
    
    setNotices(prev => [...prev, { ...options, id, message }]);

    return id;
  };

  const removeNotice = (id: string) => {
    setNotices(prev => prev.filter(notice => notice.id !== id));
  };

  const clearNotices = () => {
    setNotices([]);
  };

  return {
    notices,
    showNotice,
    removeNotice,
    clearNotices
  };
};