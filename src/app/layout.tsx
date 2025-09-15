import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Snake Game',
  description: 'Jogo Snake Game desenvolvido com Next.js, React e TypeScript.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
