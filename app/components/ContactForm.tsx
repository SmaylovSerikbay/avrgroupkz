import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^\+?[0-9]{11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Введите сообщение';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({});
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (validateForm()) {
      setIsLoading(true);

      try {
        const emailResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!emailResponse.ok) {
          throw new Error('Ошибка при отправке сообщения');
        }
        
        // Показываем уведомление об успехе
        setShowSuccess(true);
        
        // Очищаем форму
        resetForm();
        
        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } catch (err) {
        console.error('Ошибка:', err);
        setError('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="relative">
      {showSuccess && (
        <div className="absolute top-0 left-0 right-0 -mt-12 bg-green-500 text-white px-4 py-2 rounded-lg text-center">
          Сообщение успешно отправлено!
        </div>
      )}

      {error && (
        <div className="absolute top-0 left-0 right-0 -mt-12 bg-red-500 text-white px-4 py-2 rounded-lg text-center">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className={`w-full p-3 bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30`}
            disabled={isLoading}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full p-3 bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30`}
            disabled={isLoading}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Номер телефона"
            className={`w-full p-3 bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30`}
            disabled={isLoading}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите ваш проект"
            rows={4}
            className={`w-full p-3 bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30`}
            disabled={isLoading}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button 
          type="submit" 
          className={`w-full py-3 bg-white text-black rounded-lg transition-all duration-300 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Отправка...
            </span>
          ) : (
            'Отправить'
          )}
        </button>
      </form>
    </div>
  );
}; 