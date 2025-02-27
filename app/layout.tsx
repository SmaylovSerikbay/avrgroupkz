import type { Metadata } from "next";
import { ContactWidgets } from "./components/ContactWidgets";
import { aeroport } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "AVR Group - Разработка IT решений в Астане | Веб, Мобильные, VR/AR/MR приложения",
  description: "Ведущая IT компания в Астане. ✓15 лет опыта ✓Более 100 проектов ✓Гарантия качества. Разработка сайтов, мобильных приложений, VR/AR/MR решений. Создаем инновационные цифровые продукты для бизнеса.",
  keywords: [
    "разработка сайтов Астана",
    "создание сайтов",
    "веб разработка",
    "мобильные приложения",
    "разработка приложений Астана",
    "VR разработка",
    "AR разработка",
    "MR разработка",
    "IT компания Астана",
    "digital агентство",
    "разработка корпоративных сайтов",
    "создание интернет магазина",
    "разработка веб приложений",
    "мобильные приложения для бизнеса",
    "виртуальная реальность",
    "дополненная реальность",
    "смешанная реальность",
    "3D визуализация",
    "AVR Group",
    "АВР Групп"
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
  },
  alternates: {
    canonical: 'https://avrgroup.kz',
  },
  openGraph: {
    title: "AVR Group - Ведущая IT компания в Астане",
    description: "Профессиональная разработка сайтов, мобильных приложений и VR/AR/MR решений. Создаем инновационные цифровые продукты для развития вашего бизнеса.",
    url: 'https://avrgroup.kz',
    siteName: 'AVR Group',
    locale: 'ru_KZ',
    type: 'website',
    images: [
      {
        url: 'https://avrgroup.kz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVR Group - IT решения для бизнеса',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${aeroport.variable}`}>
      <body className="font-aeroport">
        {children}
        <ContactWidgets />
      </body>
    </html>
  );
}
