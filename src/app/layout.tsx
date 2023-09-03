import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalStyles from './GlobalStyles';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Binary Clock',
  description:
    'Designer Binary Clock shows hours, minutes and seconds. Developed with 01001100 01001111 01010110 01000101 by Peter R. Stuhlmann.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
