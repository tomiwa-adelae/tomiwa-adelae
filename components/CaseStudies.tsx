import cases from "@/data/case";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const CaseStudies = () => {
	return (
		<div className="case-studies">
			<div className="container">
				<h4>Latest Works</h4>
				<div className="cases">
					{cases.map((caseStudy, index) => (
						<div
							style={{
								backgroundImage: `url(${caseStudy.imagePath})`,
							}}
							key={index}
							className="case"
						>
							<div className="bg-fill"></div>
							<div className="details">
								<h3>{caseStudy.name}</h3>
								<p>{caseStudy.intro}</p>
								<Link
									style={{
										border: `2px solid #${caseStudy.primaryColor}`,
										color: "#ffffff",
									}}
									className="btn"
									href={`/cases/${caseStudy.path}`}
								>
									<span>View case</span>
									<IoIosArrowForward />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CaseStudies;
