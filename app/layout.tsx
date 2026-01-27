import type { Metadata } from 'next';
import { Schibsted_Grotesk, Martian_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { PostHogProvider } from './providers';
import Particles from '@/components/Particles';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-schibsted-grotesk',
  subsets: ['latin'],
});

const martianMono = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MeetHere - Connect, Share, and Grow Together',
  description:
    'Discover and join our community events, yoga, meditation and meetups to expand your network.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <PostHogProvider>
          <Navbar />

          <div
            style={{
              width: '100%',
              height: '1000px',
              position: 'absolute',
              zIndex: 0,
            }}
          >
            <Particles
              particleColors={['#ff0080']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
          <main>{children}</main>
        </PostHogProvider>
      </body>
    </html>
  );
}
