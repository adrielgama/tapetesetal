import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    images: '/android-chrome-512x512.png',
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
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ij913hmphx");`,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
