import type { Metadata } from "next";
import "../styles/style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Tomiwa Adelae",
	description:
		"Tomiwa Adelae, a skilled website developer. Known for crafting immersive online experiences, Tomiwa's portfolio spans from corporate websites to dynamic e-commerce platforms. With a focus on user-centric design and innovative technologies, he brings ideas to life and empowers businesses to succeed in the digital space. Collaborate with Tomiwa to transform your vision into reality.",
	keywords:
		"Tomiwa, Adelae, Tomiwa Adelae, Adetomiwa, Adetomiwa Adelae, Portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
