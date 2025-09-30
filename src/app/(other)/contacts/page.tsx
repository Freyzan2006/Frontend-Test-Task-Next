'use client';

import { useState, useEffect } from 'react';
import { Card } from "@ui-kit/ui/Card";
import { Input } from "@ui-kit/ui/Input";
import { Button } from "@ui-kit/ui/Button";
import { TitleTextGroup } from "@ui-kit/ui/Font";
import { Notice } from "@ui-kit/ui/Notice";
import { AlertGroup } from "@ui-kit/ui/Alert";
import { LinkApp } from '@ui-kit/ui/LinkApp';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'address' | 'social';
  label: string;
  value: string;
  icon: string;
  link?: string;
}

export default function ContactsPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);

  // Загружаем контактную информацию (CSR)
  useEffect(() => {
    const loadContactInfo = async () => {
      // Имитация загрузки данных
      setTimeout(() => {
        setContactInfo([
          {
            id: '1',
            type: 'email',
            label: 'Email',
            value: 'hello@company.com',
            icon: '✉️',
            link: 'mailto:hello@company.com'
          },
          {
            id: '2',
            type: 'phone',
            label: 'Телефон',
            value: '+7 (999) 123-45-67',
            icon: '📞',
            link: 'tel:+79991234567'
          },
          {
            id: '3',
            type: 'address',
            label: 'Адрес',
            value: 'г. Москва, ул. Примерная, д. 123',
            icon: '📍',
            link: 'https://maps.google.com'
          },
          {
            id: '4',
            type: 'social',
            label: 'Telegram',
            value: '@company_name',
            icon: '📱',
            link: 'https://t.me/company_name'
          }
        ]);
      }, 500);
    };

    loadContactInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Здесь будет реальный API call
      // await fetch('/api/contacts', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <Card className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <TitleTextGroup 
            title="Свяжитесь с нами" 
            text="Мы всегда рады услышать ваше мнение и ответить на вопросы"
            gap="md"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div className="lg:col-span-1">
            <Card className="h-full p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Наши контакты</h3>
              
              <div className="space-y-4">
                {contactInfo.length > 0 ? (
                  contactInfo.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-2xl flex-shrink-0">{contact.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{contact.label}</p>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm break-words"
                            target={contact.link.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  // Skeleton loading
                  Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3">
                      <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Время работы</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб-Вс:</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Напишите нам</h3>
              <p className="text-gray-600 mb-8">
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Ваше имя"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Иван Иванов"
                    required
                    disabled={isSubmitting}
                  />
                  
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ivan@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Input
                  label="Тема сообщения"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="О чём вы хотите поговорить?"
                  required
                  disabled={isSubmitting}
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите подробнее о вашем вопросе..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <AlertGroup>
                  {submitStatus === 'success' && (
                    <Notice 
                      message="Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время." 
                      variant="success" 
                    />
                  )}
                  {submitStatus === 'error' && (
                    <Notice 
                      message="Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз." 
                      variant="error" 
                    />
                  )}
                </AlertGroup>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full md:w-auto min-w-[200px]"
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </Button>
              </form>
            </Card>

            {/* Дополнительный блок */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">Нужна срочная помощь?</h4>
                <p className="mb-4 opacity-90">
                  Звоните нам прямо сейчас - мы всегда готовы помочь
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <LinkApp href={'tel:+99890'}>
                    📞 Позвонить сейчас
                  </LinkApp>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Карта (опционально) */}
        <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Мы на карте</h3>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🗺️</div>
              <p>Интерактивная карта будет здесь</p>
              <p className="text-sm mt-2">(Интеграция с Google Maps или Яндекс.Карты)</p>
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
}