import Image from "next/image";

import { Irish_Grover } from "next/font/google";
import { aboutMe } from "@/constants";
import { SparklesCore } from "./ui/sparkles";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const About = () => {
	return (
		<div className="relative">
			<div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#5795de"
				/>
			</div>
			<div className="container flex items-center justify-center text-center flex-col gap-4 pb-10 relative z-20">
				<Image
					src="/assets/tomiwa-adelae.jfif"
					alt="Tomiwa Adelae"
					width={1000}
					height={1000}
					className="rounded-full object-cover w-[250px] h-[250px] border-2 border-purple-500 border-dashed"
				/>
				<h2
					className={`${irishGrover.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
				>
					Hello, my name is Tom
					<span className="text-purple-500">iwa Ade</span>lae 👋
				</h2>
				<p className="text-sm md:text-base">{aboutMe}</p>
			</div>
		</div>
	);
};

export default About;
