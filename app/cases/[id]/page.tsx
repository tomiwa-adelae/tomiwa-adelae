import CaseShowcase from "@/components/CaseShowcase";
import CaseContent from "@/components/CaseContent";
import Header from "@/components/Header";
import React from "react";
import CaseDesign from "@/components/CaseDesign";
import Footer from "@/components/Footer";

const page = () => {
	return (
		<div className="casepage">
			<Header />
			<CaseShowcase />
			<CaseContent />
			<CaseDesign />
			<Footer />
		</div>
	);
};

export default page;
