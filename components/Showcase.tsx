import React from "react";
import { SparklesCore } from "./ui/sparkles";

import { Irish_Grover } from "next/font/google";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Showcase = () => {
	return (
		<div className="min-h-[50vh] sm:min-h-[75vh] py-10 w-full flex flex-col items-center text-center relative justify-center overflow-hidden rounded-md container">
			<h1
				className={`${irishGrover.className} uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-normal md:leading-normal`}
			>
				Tom<span className="text-purple-500">iwa Ade</span>lae
			</h1>
			<p className="text-base md:text-xl my-4 font-semibold">
				A full stack web developer
			</p>
			<div className="w-full container h-40 relative mt-4">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1.2}
					particleDensity={1200}
					className="w-full h-full"
					particleColor="#5795de"
				/>
			</div>
		</div>
	);
};

export default Showcase;
