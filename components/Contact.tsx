"use client";
import {
	IoLogoFacebook,
	IoLogoGithub,
	IoMailOutline,
	IoLogoLinkedin,
} from "react-icons/io5";

import { Smooch } from "next/font/google";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import Link from "next/link";

const smooch = Smooch({
	weight: ["400"],
	subsets: ["latin"],
});

const Contact = () => {
	return (
		<div className="showcase">
			<h1 className={smooch.className}>Contact</h1>
			<div className="socials">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/adelae.tomiwa/"
				>
					<IoLogoFacebook className="facebook" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/thetommedia/"
				>
					<IoLogoInstagram className="instagram" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/tomiwaadelae"
				>
					<IoLogoTwitter className="twitter" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/tomiwa-adelae-6a08181b7/"
				>
					<IoLogoLinkedin className="linkedin" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/tomiwa-adelae"
				>
					<IoLogoGithub className="github" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="mailto:adelaetomiwa6@gmail.com"
				>
					<IoMailOutline className="envelope" />
				</a>
			</div>
			<Link href="tel: +234 802 783 6001">
				<h5>(+234 802 783 6001)</h5>
			</Link>
		</div>
	);
};

export default Contact;
