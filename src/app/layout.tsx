import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brever.com.br"),
  title: {
    default: "Brever Blog | Insights que transformam o agro",
    template: "%s | Brever Blog",
  },
  description:
    "Conteúdos sobre gestão agrícola, produtividade no campo, combustível e tecnologia para frotas inteligentes.",
  openGraph: {
    title: "Brever Blog",
    description:
      "Conteúdos sobre gestão agrícola, produtividade no campo, combustível e tecnologia para frotas inteligentes.",
    url: "https://brever.com.br/blog",
    siteName: "Brever Blog",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} bg-bg text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
