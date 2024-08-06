import React from "react";

import { Irish_Grover } from "next/font/google";
import { SparklesCore } from "@/components/ui/sparkles";
import Header from "@/components/Header";
import { Spotlight } from "@/components/ui/spotlight";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Showcase = () => {
	return (
		<div
			className="min-h-[50vh] sm:min-h-[75vh] w-full flex flex-col items-center text-center relative justify-center overflow-hidden text-white"
			style={{ backgroundImage: `url(/assets/bootcamp-bg.png)` }}
		>
			<Spotlight
				className="-top-5 left-10 md:left-30 md:-top-10"
				fill="#5795de"
			/>
			<Header />
			<h1
				className={`${irishGrover.className} uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl container mt-10`}
			>
				Start your Tech Journey{" "}
				<span className="text-purple-500">with us</span>
			</h1>
			<p className="text-base my-6 font-medium container">
				Are you curious about how websites are made? Want to learn the
				skills that can help you build your own site or start a career
				in tech? You&apos;re in the right place! Our program offers a
				comprehensive introduction to website development, covering
				everything from basic HTML and CSS to advanced JavaScript and
				backend development.
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
