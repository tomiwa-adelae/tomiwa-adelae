import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestWorks from "@/components/LatestWorks";
import MySkills from "@/components/MySkills";
import Showcase from "@/components/Showcase";

const page = () => {
	return (
		<main>
			<Header />
			<Showcase />
			<About />
			<LatestWorks />
			<MySkills />
			<ContactMe />
			<Footer />
		</main>
	);
};

export default page;
