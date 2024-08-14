import React from "react";

import { Irish_Grover } from "next/font/google";
import { SparklesCore } from "@/components/ui/sparkles";
import Header from "@/components/Header";
import { Spotlight } from "@/components/ui/spotlight";
import Footer from "@/components/Footer";


const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Showcase = () => {
	return (
        <div className="min-h-[100vh] sm:min-h-[100vh] w-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/assets/success-bg.png)` }}>

		<div
			className=" flex flex-col items-center text-center relative justify-center overflow-hidden text-white"
			
		>
			<Spotlight
				className="-top-5 left-10 md:left-30 md:-top-10"
				fill="#5795de"
			/>
			<Header />
			<h1
				className={`${irishGrover.className} uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl container mt-10`}
			>
				Registration {" "}
				<span className="text-purple-500">successful</span>
			</h1>
			<p className="text-base my-6 font-medium container">
            Your registration has been sent successfully! I will get back to you within the next 24 hours.
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
			<Footer />
            </div>

		</div>
	);
};

export default Showcase;
