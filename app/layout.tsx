import type { Metadata } from "next";
import { ContactWidgets } from "./components/ContactWidgets";
import { aeroport } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "AVR Group - №1 в разработке VR/AR/MR, мобильных приложений и сайтов в Казахстане и СНГ",
  description: "Лидирующая IT компания в СНГ и Казахстане с 2009 года. ✓15+ лет опыта ✓500+ реализованных проектов ✓Собственные инновационные VR/AR/MR технологии ✓Международные награды ✓Разработка мобильных приложений и сайтов премиум-класса ✓Гарантия результата",
  keywords: [
    // Высокочастотные запросы
    "разработка VR приложений",
    "разработка AR приложений",
    "разработка MR приложений",
    "разработка мобильных приложений",
    "разработка сайтов",
    // Геолокация - Казахстан
    "разработка сайтов Казахстан",
    "мобильные приложения Казахстан",
    "VR AR разработка Казахстан",
    "IT компания Казахстан номер 1",
    "лучшая разработка приложений Казахстан",
    // Геолокация - СНГ
    "ведущая VR компания СНГ",
    "топ AR разработчик СНГ",
    "лучшая MR разработка СНГ",
    "мобильные приложения СНГ",
    // Ключевые города
    "разработка сайтов Астана",
    "разработка сайтов Алматы",
    "VR AR разработка Астана",
    "мобильные приложения Астана",
    "IT решения Алматы",
    // Специализация
    "разработка корпоративных сайтов",
    "создание интернет магазинов",
    "разработка веб-сервисов",
    "enterprise мобильные приложения",
    "виртуальная реальность для бизнеса",
    "дополненная реальность для промышленности",
    "смешанная реальность для обучения",
    "3D визуализация и моделирование",
    // Бренд и домен
    "AVR Group официальный сайт",
    "АВР Групп Казахстан",
    "avr-group.kz"
  ].join(", "),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },
  alternates: {
    canonical: 'https://avr-group.kz',
    languages: {
      'ru-KZ': 'https://avr-group.kz',
      'kk-KZ': 'https://avr-group.kz/kk',
      'en-US': 'https://avr-group.kz/en',
    }
  },
  openGraph: {
    title: "AVR Group - Лидер IT-индустрии в СНГ и Казахстане с 2009 года",
    description: "15+ лет создаем передовые VR/AR/MR решения, мобильные приложения и веб-платформы. 500+ успешных проектов, международное признание, инновационные технологии.",
    url: 'https://avr-group.kz',
    siteName: 'AVR Group',
    locale: 'ru_KZ',
    type: 'website',
    images: [
      {
        url: 'https://avr-group.kz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVR Group - Ведущая IT-компания в СНГ и Казахстане с 2009 года',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVR Group - Инновационные IT-решения для бизнеса',
    description: 'Ведущий разработчик VR/AR/MR решений, мобильных приложений и веб-платформ в СНГ и Казахстане',
    images: ['https://avr-group.kz/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${aeroport.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-aeroport antialiased">
        {children}
        <ContactWidgets />
      </body>
    </html>
  );
}
