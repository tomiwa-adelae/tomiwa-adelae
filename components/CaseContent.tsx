"use client";
import { useParams } from "next/navigation";
import { MdCallMissedOutgoing } from "react-icons/md";

import cases from "@/data/case";

const CaseContent = () => {
	const { id } = useParams();
	const caseStudy = cases.filter(({ path }) => path === id);
	return (
		<div className="case-content">
			<div className="container">
				<h3>The Project</h3>

				<p>{caseStudy[0].intro}</p>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href={caseStudy[0].visitURL}
					className="btn"
					style={{
						border: `2px solid #${caseStudy[0].primaryColor}`,
						color: `#${caseStudy[0].primaryColor}`,
					}}
				>
					<span>Visit Website</span>
					<MdCallMissedOutgoing />
				</a>
			</div>
		</div>
	);
};

export default CaseContent;
