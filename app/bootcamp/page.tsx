import Footer from "@/components/Footer";
import Showcase from "./components/Showcase";
import { RegistrationForm } from "./components/RegistrationForm";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Bootcamp training | Tomiwa Adelae",
	description:
		"Tomiwa Adelae, a skilled full stack website developer. Known for crafting immersive online experiences, Tomiwa's portfolio spans from corporate websites to dynamic e-commerce platforms. With a focus on user-centric design and innovative technologies, he brings ideas to life and empowers businesses to succeed in the digital space. Collaborate with Tomiwa to transform your vision into reality.",
	keywords:
		"Tomiwa, Adelae, Tomiwa Adelae, Adetomiwa, Adetomiwa Adelae, Portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack",
	icons: {
		icon: "/assets/favicon.ico",
	},
};

const page = () => {
	return (
		<main>
			<Showcase />
			<RegistrationForm />
			<Footer />
		</main>
	);
};

export default page;
