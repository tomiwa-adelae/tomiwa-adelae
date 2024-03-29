import Showcase from "@/components/Showcase";
import Header from "../components/Header";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Interested from "@/components/Interested";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="homepage">
			<Header />
			<Showcase />
			<About />
			<CaseStudies />
			<Skills />
			<Interested />
			<Footer />
		</div>
	);
}
