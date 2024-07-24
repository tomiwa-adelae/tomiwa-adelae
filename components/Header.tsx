"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

import { Irish_Grover } from "next/font/google";
import { Theme } from "./Theme";
import { Separator } from "./ui/separator";
import { Github, Twitter } from "lucide-react";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Header = () => {
	return (
		<header className="container flex items-center justify-between py-4 ">
			<Link href="/" className="flex items-center justify-start gap-2">
				<Image
					src={"/assets/logo.png"}
					alt={"Tomiwa Adelae"}
					width={1000}
					height={1000}
					className="w-8 h-8 md:w-10 md:h-10 object-cover"
				/>
				<h1
					className={`hidden sm:block font-extrabold text-lg md:text-xl lg:text-2xl ${irishGrover.className}`}
				>
					Tom
					<span className={`text-purple-500`}>iwa Ade</span>
					lae
				</h1>
			</Link>
			<div className="flex h-5 items-center space-x-4 text-sm">
				<Theme />
				<Separator orientation="vertical" className="bg-purple-500" />
				<Button size="icon" variant={"ghost"} asChild>
					<a
						href={"https://github.com/tomiwa-adelae"}
						className="transition hover:text-purple-500"
						target="_blank"
					>
						<Github />
					</a>
				</Button>
				<Separator orientation="vertical" className="bg-purple-500" />
				<Button size="icon" variant={"ghost"} asChild>
					<a
						href={"https://x.com/tomiwaadelae"}
						className="transition hover:text-purple-500"
						target="_blank"
					>
						<Twitter />
					</a>
				</Button>
				{/* <Separator orientation="vertical" className="bg-purple-500" /> */}
				{/* <Button asChild>
					<Link href="/#contact">Let&apos;s talk</Link>
				</Button> */}
			</div>
		</header>
	);
};

export default Header;
