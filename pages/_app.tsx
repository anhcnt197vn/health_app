import "../styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import MainLayout from "../src/layouts/MainLayout";

const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/noto-sans/NotoSansJP-Thin.otf",
      weight: "100",
    },
    {
      path: "../assets/fonts/noto-sans/NotoSansJP-Light.otf",
      weight: "300",
    },
    {
      path: "../assets/fonts/noto-sans/NotoSansJP-Bold.otf",
      weight: "600",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${myFont.style.fontFamily};
        }
      `}</style>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
