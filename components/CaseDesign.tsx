"use client";
import { useParams } from "next/navigation";

import cases from "@/data/case";
import Image from "next/image";

const CaseDesign = () => {
	const { id } = useParams();
	const caseStudy = cases.filter(({ path }) => path === id);
	return (
		<div
			style={{
				backgroundColor: `#${caseStudy[0].primaryColor}`,
			}}
			className="case-design"
		>
			<h3>The Design</h3>
			<div className="container">
				{caseStudy[0].showcaseImages.map((image, index) => (
					<Image src={image} alt={image} height={1000} width={1000} />
				))}
			</div>
		</div>
	);
};

export default CaseDesign;
