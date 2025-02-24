import { Irish_Grover } from "next/font/google";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { skills } from "@/constants";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const MySkills = () => {
	return (
		<div className="container py-10 relative z-20">
			<h3
				className={`uppercase ${irishGrover.className} text-center text-2xl sm:text-3xl md:text-4xl text-purple-500 mb-4`}
			>
				My Skills
			</h3>
			<div className="flex items-center justify-center flex-col gap-8 w-full">
				{skills.map((skill, index) => {
					const Icon = skill.icon;
					return (
						<div
							className={`border-2 border-dashed border-purple-500 py-6 px-4 rounded-md w-full`}
							key={index}
						>
							<div
								className={`uppercase flex items-center ${skill.direction} gap-2 ${irishGrover.className} text-2xl sm:text-3xl md:text-4xl text-purple-500 leading-loose md:leading-loose`}
							>
								<Icon />
								<h3>{skill.title}</h3>
							</div>
							<p
								className={`text-sm md:text-base ${skill.style} font-semibold my-4 leading-loose md:leading-loose`}
							>
								{skill.description}
							</p>
							<div
								className={`flex flex-wrap gap-4 flex-row items-center ${skill.direction} mb-10 w-full`}
							>
								<AnimatedTooltip items={skill.skills} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MySkills;
