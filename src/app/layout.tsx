import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Motion } from '@/components/Motion';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import './globals.css';

const geist = localFont({
  src: '../../public/fonts/geist-latin.woff2',
  variable: '--font-geist',
  display: 'swap',
  weight: '100 900',
});

export const viewport: Viewport = {
  themeColor: '#07090e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: './',
  },
  keywords: [
    'software engineering studio',
    'Next.js 15 agency',
    'UI/UX design systems',
    'creative engineering',
    'WebGL experiences',
    'bespoke web development',
    'Shopify architecture',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [{ url: '/nexify-brand.png', width: 2047, height: 2047, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ['/nexify-brand.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/nexify-brand.png',
    apple: '/nexify-brand.png',
  },
};

// Runs before first paint: hidden-until-revealed styles only apply when JS and motion are on.
const flags = `document.documentElement.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: flags }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>

        {/* WebGL Canvas Host (persists across navigations) */}
        <div id="gl" aria-hidden="true" />

        {/* Route Transition Curtain */}
        <div id="curtain" aria-hidden="true">
          <div className="curtain__panel" />
        </div>

        {/* Precision Cursor Follower */}
        <div id="cursor" aria-hidden="true">
          <span data-cursor-label />
        </div>

        {/* First-load Sequence / Telemetry Calibration */}
        <div id="loader" role="status" aria-label="Loading System">
          <div className="loader__meta">
            <span data-loader-out>NEXIFY CONCEPTS // COORD 24.86, 67.00</span>
            <span data-loader-out>CALIBRATING DISCIPLINE MESH</span>
          </div>
          <div className="loader__body">
            <h2 className="loader__title" data-loader-out>
              CONNECT · INNOVATE · ADVANCE
            </h2>
            <div className="loader__counter" data-loader-out data-loader-count>
              000
            </div>
          </div>
          <div className="loader__bar" data-loader-bar />
        </div>

        {/* Header Navigation */}
        <Header />

        {/* Primary Landmark */}
        <main id="main" tabIndex={-1}>
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Direct Uplink */}
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Direct WhatsApp inquiry with Nexify Concepts"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        {/* JSON-LD Structured Data */}
        <JsonLd />

        {/* Motion Engine: MUST be the LAST child in body */}
        <Motion />
      </body>
    </html>
  );
}
