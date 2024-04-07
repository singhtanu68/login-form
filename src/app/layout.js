
import 'tailwindcss/tailwind.css';
import { Toaster } from 'sonner';



export default function RootLayout({ children }) {
  return (
    <html >
      <body>{children}</body>
      <Toaster position="top-right" richColors/>
    </html>
  );
}

