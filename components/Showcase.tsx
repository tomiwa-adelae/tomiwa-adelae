"use client";
import { IoIosArrowDown } from "react-icons/io";
import { Smooch } from "next/font/google";

const smooch = Smooch({
	weight: ["400"],
	subsets: ["latin"],
});
const Showcase = () => {
	return (
		<div className="showcase">
			<h1 className={smooch.className}>
				Tomiwa <span className="text-primary">Adelae</span>
			</h1>
			<h5>Full Stack Web Developer</h5>
			<div
				onClick={() => {
					window.scroll({
						top: 420,
						behavior: "smooth",
					});
				}}
				className="icon"
			>
				<IoIosArrowDown />
			</div>
		</div>
	);
};

export default Showcase;
