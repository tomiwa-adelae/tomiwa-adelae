"use client";
import { Smooch } from "next/font/google";
import { useParams } from "next/navigation";
import cases from "@/data/case";

const smooch = Smooch({
	weight: ["400"],
	subsets: ["latin"],
});

const CaseShowcase = () => {
	const { id } = useParams();
	const caseStudy = cases.filter(({ path }) => path === id);

	return (
		<div
			style={{
				backgroundImage: `url(${caseStudy[0].imagePath})`,
			}}
			className="showcase"
		>
			<div className="bg-fill"></div>
			<div className="container">
				<h1 className={smooch.className}>{caseStudy[0].name}</h1>
				<h5>{caseStudy[0].intro}</h5>
				{/* <div
					onClick={() => {
						window.scroll({
							top: 420,
							behavior: "smooth",
						});
					}}
					className="icon"
				>
					<IoIosArrowDown />
				</div> */}
				<div className="position">
					<h6>
						<span
							style={{ color: `#${caseStudy[0].primaryColor}` }}
						>
							Role
						</span>{" "}
						{caseStudy[0].role}
					</h6>
					<h6>
						<span
							style={{ color: `#${caseStudy[0].primaryColor}` }}
						>
							Period
						</span>{" "}
						{caseStudy[0].period}
					</h6>
				</div>
			</div>
		</div>
	);
};

export default CaseShowcase;
