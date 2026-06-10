import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shazib.dev'),
  title: {
    default: 'Shahriyar Shazib — Laravel & React Specialist',
    template: '%s | Shahriyar Shazib',
  },
  description:
    'Full Stack Developer specializing in Laravel and React. 4+ years building production-grade web applications, REST APIs, and enterprise systems.',
  keywords: [
    'Shahriyar Shazib',
    'Full Stack Developer',
    'Laravel Developer',
    'React Developer',
    'PHP Developer',
    'Software Engineer',
    'Bangladesh',
    'Web Developer',
    'REST API',
    'MySQL',
  ],
  authors: [{ name: 'Shahriyar Shazib' }],
  creator: 'Shahriyar Shazib',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shazib.dev',
    title: 'Shahriyar Shazib — Laravel & React Specialist',
    description:
      'Full Stack Developer specializing in Laravel and React. 4+ years building production-grade web applications.',
    siteName: 'Shahriyar Shazib Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahriyar Shazib — Laravel & React Specialist',
    description:
      'Full Stack Developer specializing in Laravel and React. 4+ years building production-grade web applications.',
    creator: '@shazib',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shahriyar Shazib',
              url: 'https://shazib.dev',
              jobTitle: 'Software Engineer',
              worksFor: { '@type': 'Organization', name: 'Analyzen Bangladesh Ltd' },
              knowsAbout: ['Laravel', 'PHP', 'React', 'JavaScript', 'MySQL', 'AWS'],
              alumniOf: [
                { '@type': 'Organization', name: 'GeeksnTechnology Ltd' },
                { '@type': 'Organization', name: 'E-Soft BD' },
                { '@type': 'Organization', name: 'Analyzen Bangladesh Ltd' },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
