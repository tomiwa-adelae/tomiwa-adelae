import { latestWorks } from "@/constants";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Irish_Grover } from "next/font/google";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const LatestWorks = () => {
	return (
		<div className="container py-10 relative">
			<Spotlight
				className="-top-5 left-10 md:left-30 md:-top-10"
				fill="#5795de"
			/>
			<h3
				className={`uppercase ${irishGrover.className} text-center text-2xl sm:text-3xl md:text-4xl text-purple-500 mb-4`}
			>
				Latest Works
			</h3>
			<div className="grid grid-cols-1 gap-8">
				{latestWorks.map((work, index) => (
					<div
						className="border-2 border-dashed border-purple-500 rounded-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
						key={index}
					>
						<Image
							src={work.image}
							alt={work.title}
							width={1000}
							height={1000}
							className={`aspect-video object-cover rounded-md ${
								index == 1 ? "lg:order-last" : "lg:order-first"
							}`}
						/>
						<div className="space-y-4 text-center lg:text-left">
							<h3
								className={`uppercase ${irishGrover.className} text-2xl text-purple-500`}
							>
								{work.title}
							</h3>
							<p className="text-sm md:text-base">
								{work.description}
							</p>
							<ul className="text-base font-semibold text-purple-500 flex items-center justify-center lg:justify-start gap-4">
								{work.stack.map((stack, index) => (
									<a
										href={stack.link}
										target="_blank"
										className="transition hover:underline"
										key={index}
									>
										{stack.name}
									</a>
								))}
							</ul>
							<div className="flex items-center justify-center lg:justify-start gap-4">
								<a
									href={work.website}
									target="_blank"
									className="p-4 group rounded-md border border-dashed border-purple-500 inline-block bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 hover:bg-purple-100 transition"
								>
									<SquareArrowOutUpRight className="text-purple-500" />
								</a>
								<a
									href={work.github}
									target="_blank"
									className="p-4 rounded-md border border-dashed border-purple-500 inline-block bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 hover:bg-purple-100 transition"
								>
									<Github className="text-purple-500" />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestWorks;
