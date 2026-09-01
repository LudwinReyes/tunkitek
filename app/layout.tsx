import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tunkitek.lat'),
  title: 'TunkiTek | Agencia de Tecnología e Innovación',
  description: 'Más que proveedores, somos tu equipo aliado en tecnología e innovación. Soluciones digitales de alto impacto para Perú y el mundo.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'TunkiTek | Agencia de Tecnología e Innovación',
    description: 'Más que proveedores, somos tu equipo aliado en tecnología e innovación. Soluciones digitales de alto impacto para Perú y el mundo.',
    type: 'website',
    url: 'https://tunkitek.lat',
    siteName: 'TunkiTek',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'TunkiTek Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TunkiTek | Agencia de Tecnología e Innovación',
    description: 'Más que proveedores, somos tu equipo aliado en tecnología e innovación.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: 'https://tunkitek.lat',
  },
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
  other: {
    'geo.region': 'PE-LIM',
    'geo.placename': 'Lima, Perú',
    'geo.position': '-12.046374;-77.042793',
    'ICBM': '-12.046374, -77.042793',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} font-sans scroll-smooth dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('tunkitek-theme') || 'dark';
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-neutral-900 dark:text-[#F8F9FA] antialiased selection:bg-[#FF4500]/30 selection:text-white transition-colors duration-300 min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
