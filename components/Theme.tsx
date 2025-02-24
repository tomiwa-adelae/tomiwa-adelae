import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonStar, Sun } from "lucide-react";

import { Irish_Grover } from "next/font/google";

import { useTheme } from "@/context/ThemeProvider";
import { themes } from "@/constants";
import Image from "next/image";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

export function Theme() {
	const { mode, setMode } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={"icon"} variant="ghost">
					{mode === "light" ? (
						<Image
							src={"/assets/icons/sun.svg"}
							alt={"Sun Icon"}
							width={1000}
							height={1000}
							className="w-[20px] h-[20px]"
						/>
					) : (
						<Image
							src={"/assets/icons/moon.svg"}
							alt={"Moon Icon"}
							width={1000}
							height={1000}
							className="w-[20px] h-[20px] invert"
						/>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{themes.map((item, index) => {
					return (
						<DropdownMenuItem
							className={`${
								irishGrover.className
							} dark:text-white text-sm uppercase cursor-pointer dark:hover:bg-purple-400 ${
								mode === item.value &&
								"bg-purple-500 text-white dark:bg-purple-600"
							}`}
							key={index}
							onClick={() => {
								setMode(item.value);
								if (item.value !== "system") {
									localStorage.theme = item.value;
								} else {
									localStorage.removeItem("theme");
								}
							}}
						>
							<Image
								src={item.icon}
								alt={`${item.value} icon`}
								width={1000}
								height={1000}
								className="w-[20px] h-[20px] mr-2"
							/>
							<p>{item.value}</p>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
