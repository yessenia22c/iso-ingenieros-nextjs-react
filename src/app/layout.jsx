import { Inter } from "next/font/google";
import PrincipalNavComponent from "../components/NavComponent/PrincipalNavComponent.jsx";
import "./globals.css";
import { FooterComponent } from "@/components/Footer/FooterComponent.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISO Ingenieros",
  description: "Cursos ISO45001 ISO9001 ISO14001 ISO27001 ISO22000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <PrincipalNavComponent></PrincipalNavComponent>
       <main className="flex-col justify-center">{children}</main>
        <FooterComponent></FooterComponent>
      </body>
    </html>
  );
}
