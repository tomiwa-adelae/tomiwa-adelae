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
		"Welcome to Tomiwa Adelae digital showcase! Tomiwa Adelae is a passionate website developer dedicated to crafting immersive online experiences. Through a blend of creativity and technical expertise, my portfolio encapsulates a diverse range of projects, from sleek corporate websites to dynamic e-commerce platforms. With a focus on user-centric design and cutting-edge technologies, I bring ideas to life and empower businesses to thrive in the digital realm. Explore my work, delve into my skills, and let's collaborate to turn your vision into reality.",
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
