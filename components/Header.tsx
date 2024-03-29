import { Smooch } from "next/font/google";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const smooch = Smooch({
	weight: ["400"],
	subsets: ["latin"],
});

const Header = () => {
	return (
		<header>
			<Link href="/">
				<h4 className={smooch.className}>
					Tomiwa <span className="text-primary">Adelae</span>
				</h4>
			</Link>
			<Link href="/contact" className="btn btn-primary">
				<span>Get in touch</span>
				<IoIosArrowForward />
			</Link>
		</header>
	);
};

export default Header;
