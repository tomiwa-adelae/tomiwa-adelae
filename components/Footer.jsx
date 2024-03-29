"use client";
import {
	IoLogoFacebook,
	IoLogoGithub,
	IoMailOutline,
	IoLogoLinkedin,
} from "react-icons/io5";

import { Smooch } from "next/font/google";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const smooch = Smooch({
	weight: ["400"],
	subsets: ["latin"],
});

const Footer = () => {
	return (
		<footer>
			<h2
				onClick={() => {
					window.scroll({
						top: 0,
						behavior: "smooth",
					});
				}}
				className={smooch.className}
			>
				Tomiwa <span className="text-primary">Adelae</span>
			</h2>
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
					href="https://www.linkedin.com/in/tomiwa-ademola-6a08181b7/"
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
			<p>&copy; 2024 Tomiwa Adelae. All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
