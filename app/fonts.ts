import localFont from 'next/font/local';

export const aeroport = localFont({
  src: [
    {
      path: '../public/fonts/Aeroport-light-trial.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeroport-regular-trial.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeroport-bold-trial.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-aeroport',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
}); 