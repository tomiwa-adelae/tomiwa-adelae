import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Contact | Tomiwa Adelae",
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
