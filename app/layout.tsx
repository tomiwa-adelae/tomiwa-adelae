import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
	title: "Tomiwa Adelae | A full stack developer",
	description:
		"Tomiwa Adelae, a skilled full stack website developer. Known for crafting immersive online experiences, Tomiwa's portfolio spans from corporate websites to dynamic e-commerce platforms. With a focus on user-centric design and innovative technologies, he brings ideas to life and empowers businesses to succeed in the digital space. Collaborate with Tomiwa to transform your vision into reality.",
	keywords:
		"Tomiwa, Adelae, Tomiwa Adelae, Adetomiwa, Adetomiwa Adelae, Portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack",
	icons: {
		icon: "/assets/favicon.ico",
	},
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
			<head />
			<body
				className={(cn(`antialiased font-sans`), montserrat.className)}
			>
				<Spotlight
					className="-top-5 left-10 md:left-30 md:-top-10"
					fill="#5795de"
				/>
				{/*<main className="min-h-screen w-full dark:bg-dark bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center text-dark dark:text-white">
					<ThemeProvider>{children}</ThemeProvider>
					<Toaster />
				</main>*/}
				<main className="min-h-screen w-full dark:bg-dark bg-white relative flex items-center justify-center text-dark dark:text-white">
					<ThemeProvider>{children}</ThemeProvider>
					<Toaster />
				</main>
			</body>
		</html>
	);
}
