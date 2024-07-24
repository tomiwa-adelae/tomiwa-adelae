import { Irish_Grover } from "next/font/google";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Footer = () => {
	return (
		<footer
			className={`font-semibold text-sm text-center p-8 container ${irishGrover.className}`}
		>
			&copy; 2024 Tom<span className="text-purple-500">iwa Ade</span>lae.
			All Rights Reserved
		</footer>
	);
};

export default Footer;
