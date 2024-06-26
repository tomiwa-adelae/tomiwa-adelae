import type { Metadata } from "next";
import CaseShowcase from "@/components/CaseShowcase";
import CaseContent from "@/components/CaseContent";
import Header from "@/components/Header";
import React from "react";
import CaseDesign from "@/components/CaseDesign";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Latest Work | Tomiwa Adelae",
	description: "Latest cases or projects",
};

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
