import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tapetes & Tal',
  description: 'Um novo conceito em tapetes.',
  category: 'general',
  robots: 'index, follow',
  authors: [{ name: 'Adriel Gama', url: 'https://adrielgama.dev' }],
  openGraph: {
    title: 'Tapetes & Tal - Um novo conceito em tapetes',
    description:
      'Tapetes e capachos vulcanizados personalizados com a sua marca.',
    url: 'https://www.tapetesetal.com.br/',
    images: '/webpage_300x200.png',
    type: 'website',
    locale: 'pt_BR',
  },
  keywords:
    'tapetes,tapete personalizado,tapetes personalizados,tapetes bahia,carpete,capacho,personalizado,carpete,higiene,vulvanizado,emborrachado,tapete borracha, loja, tapete de loja',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  verification: {
    google: 'XBtT4TD3zQONv2qUXmTmRv5PUqG3KQSVrpSSP37ujhs',
  },
  creator: 'Adriel Gama - adrielgama.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
