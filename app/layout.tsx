import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ContactWidgets } from "./components/ContactWidgets";
import { aeroport } from './fonts';
import "./globals.css";

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: "AVR Group - Ведущая компания по разработке VR/AR/MR, мобильных приложений и сайтов в Казахстане",
  description: "Топовая IT компания в СНГ и Казахстане. ✓15 лет опыта ✓500+ успешных проектов ✓Инновационные VR/AR/MR решения ✓Профессиональная разработка мобильных приложений и сайтов ✓Международный опыт ✓Гарантия качества",
  keywords: [
    // Казахстан
    "разработка сайтов Казахстан",
    "мобильные приложения Казахстан",
    "VR AR разработка Казахстан",
    "IT компания Казахстан",
    "разработка приложений Казахстан",
    // СНГ
    "VR разработка СНГ",
    "AR разработка СНГ",
    "MR разработка СНГ",
    "разработка приложений СНГ",
    // Города
    "разработка сайтов Астана",
    "разработка сайтов Алматы",
    "мобильные приложения Астана",
    "мобильные приложения Алматы",
    // Специфика
    "корпоративные сайты",
    "интернет магазины",
    "веб приложения",
    "мобильные приложения для бизнеса",
    "виртуальная реальность",
    "дополненная реальность",
    "смешанная реальность",
    "3D визуализация",
    // Бренд
    "AVR Group",
    "АВР Групп",
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
  },
  openGraph: {
    title: "AVR Group - Ведущая IT компания в СНГ и Казахстане",
    description: "Профессиональная разработка VR/AR/MR решений, мобильных приложений и сайтов. 15 лет опыта, 500+ успешных проектов, международное качество.",
    url: 'https://avr-group.kz',
    siteName: 'AVR Group',
    locale: 'ru_KZ',
    type: 'website',
    images: [
      {
        url: 'https://avr-group.kz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVR Group - Инновационные IT решения в СНГ и Казахстане',
      }
    ],
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${aeroport.variable} scroll-smooth ${inter.className}`}>
      <head>
        <link
          rel="preload"
          href={aeroport.style.fontFamily}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-aeroport antialiased">
        {children}
        <ContactWidgets />
      </body>
    </html>
  );
}
