export const metadata = {
  title: "Miss Venezuela · MUBA (Demo Web)",
  description: "Presentación web interactiva con 1–2 fotos por slide, animaciones y autoplay.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
