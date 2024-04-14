import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Contact | Tomiwa Adelae",
	description:
		"Connect with Tomiwa Adelae - Your Partner in Digital Innovation! Reach out through our contact page to start a conversation about your digital project. Whether you're seeking website development, e-commerce solutions, or user-centric design, Tomiwa's expertise is at your service. Let's collaborate and turn your vision into a digital reality. Get in touch today",
	keywords:
		"Contact us, contact Tomiwa Adelae, Contact Adelae, Contact, Contact website developer, Tomiwa, Adelae, Tomiwa Adelae, Adetomiwa, Adetomiwa Adelae, Portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack",
};

const page = () => {
	return (
		<div className="contactpage">
			<Header />
			<Contact />
			<Footer />
		</div>
	);
};

export default page;
