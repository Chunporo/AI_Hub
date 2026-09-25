import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Hub — Find the right AI tool',
  description: 'A thoughtfully curated directory of the best AI tools.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
