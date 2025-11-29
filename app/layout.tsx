import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "Tomiwa Adelae | A full stack developer",
  description:
    "Tomiwa Adelae, a skilled, result-driven full stack developer known for crafting immersive online experiences. This portfolio spans from corporate websites to dynamic e-commerce platforms. With a focus on user-centric design and innovative technologies, he brings ideas to life and empowers businesses to succeed in the digital space.",
  keywords:
    "tomiwa, adelae, tomiwa adelae, adetomiwa, ademola, adetomiwa adelae, portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack",
  openGraph: {
    images: "/assets/opengraph.jpeg",
  },
  metadataBase: new URL("https://tomiwaadelae.com.ng"),
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:image" content="/opengraph.jpeg" />
        <meta property="og:image" content="/assets/opengraph.jpeg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          data-n-head="ssr"
          data-hid="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <body className={(cn(`antialiased font-sans`), montserrat.className)}>
        <Spotlight
          className="-top-5 left-10 md:left-30 md:-top-10"
          fill="#5795de"
        />
        <main className="min-h-screen w-full dark:bg-dark bg-white relative flex items-center justify-center text-dark dark:text-white">
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
