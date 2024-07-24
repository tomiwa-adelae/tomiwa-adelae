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
					{mode === "light" ? <Sun /> : <MoonStar />}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{themes.map((item, index) => {
					const Icon = item.icon;
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
							<Icon className="mr-2" /> <p>{item.value}</p>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
