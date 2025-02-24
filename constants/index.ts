import {
	CodeXml,
	Mail,
	MapPin,
	PencilRuler,
	Phone,
	Server,
} from "lucide-react";

export const aboutMe =
	"As a website programmer and freelancer for over four years, I've completed personal projects, remote work for agencies, and consulted for startups. Collaborating with talented individuals, I've created digital products for diverse uses. I'm quiet confident, naturally curious, and continually strive to enhance my skills with each design challenge.";

export const contact = [
	{
		title: "Send an email",
		icon: Mail,
		name: "adelaetomiwa6@gmail.com",
	},
	{
		title: "Visit my office",
		icon: MapPin,
		name: "51A, Agboola Ajumobi, Magodo Phase 2, GRA, Ikeja, Lagos State, Nigeria.",
	},
	{
		title: "Call me now",
		icon: Phone,
		name: "(+234) 802 783 6001",
	},
];

export const latestWorks = [
	{
		image: "/assets/yafpay.png",
		title: "YafPay",
		description:
			"Welcome to YafPay, where financial convenience knows no bounds. With our innovative banking app, YafPay, you can seamlessly transfer and deposit money anytime, anywhere in the world, putting the power of global transactions in the palm of your hand. Services offered includes: Powerful Mobile & Online App, Full Data Privacy Compliance, 100% Transparent Cost, Commitment Free, Free Plan Available, Debit Mastercard.",
		github: "https://github.com/ashu378/yafpay-website",
		website: "https://yafpay.com/",
		style: "order-last",
		stack: [
			{
				name: "NextJS",
				link: "https://nextjs.org/",
			},
			{
				name: "NodeJS",
				link: "https://nodejs.org/en",
			},
			{
				name: "ExpressJS",
				link: "https://expressjs.com/",
			},
			{
				name: "MongoDB",
				link: "https://www.mongodb.com/",
			},
		],
	},
	{
		image: "/assets/ontime.png",
		title: "QRCode Attendance system",
		description:
			"Taking attendance manually with pen and paper becomes cumbersome as the population increases. There is a crucial need for a swift attendance system that offers speed, authentication, and precise record-keeping. Implementing a QRCode system enhances the attendance process, making it five times faster. This platform operates smoothly and is already in use in schools and universities.",
		github: "https://github.com/tomiwa-adelae/On-Time",
		website: "https://ontime-zeta.vercel.app/",
		style: "order-last",
		stack: [
			{
				name: "NextJS",
				link: "https://nextjs.org/",
			},
			{
				name: "NodeJS",
				link: "https://nodejs.org/en",
			},
			{
				name: "ExpressJS",
				link: "https://expressjs.com/",
			},
			{
				name: "MongoDB",
				link: "https://www.mongodb.com/",
			},
		],
	},
	{
		image: "/assets/passify.png",
		title: "Online pass system",
		description:
			"Obtaining an exeat pass can be a stressful task for both students and administrators. This online platform streamlines the process, enhancing productivity for everyone involved.",
		github: "https://github.com/tomiwa-adelae/Online-pass-system",
		website: "https://passify-eight.vercel.app/",
		style: "order-first",
		stack: [
			{
				name: "NextJS",
				link: "https://nextjs.org/",
			},
			{
				name: "NodeJS",
				link: "https://nodejs.org/en",
			},
			{
				name: "ExpressJS",
				link: "https://expressjs.com/",
			},
			{
				name: "MongoDB",
				link: "https://www.mongodb.com/",
			},
		],
	},
	{
		image: "/assets/acusa.png",
		title: "Ajayi Crowther University Student Assembly",
		description:
			"Publicity is a crucial factor in enhancing a university's reputation. A website for the Student Assembly of Ajayi Crowther University would highlight the school's activities and achievements. This website features events, news, information about the executives, press release archives, and articles.",
		github: "https://github.com/tomiwa-adelae/ACUSA",
		website: "https://acusa.com.ng/",
		style: "order-first",
		stack: [
			{
				name: "HTML",
				link: "https://en.wikipedia.org/wiki/HTML",
			},
			{
				name: "CSS",
				link: "https://en.wikipedia.org/wiki/CSS",
			},
			{
				name: "JavaScript",
				link: "https://en.wikipedia.org/wiki/JavaScript",
			},
			{
				name: "SASS",
				link: "https://sass-lang.com/",
			},
		],
	},
];

export const skills = [
	{
		title: "Designer",
		icon: PencilRuler,
		description:
			"Simple content structure, clean design patterns, and thoughtful interactions are important to me.",
		direction: "justify-end",
		style: "md:translate-x-10 text-right",
		skills: [
			{
				id: 1,
				name: "Figma",
				designation: "4 years experience",
				image: "/assets/icons/figma.svg",
			},
			{
				id: 2,
				name: "Font Awesome",
				designation: "4 years experience",
				image: "/assets/icons/font-awesome.svg",
			},
			{
				id: 3,
				name: "Pen & Paper",
				designation: "4 years experience",
				image: "/assets/icons/pen-paper.svg",
			},
			{
				id: 4,
				name: "Sketch",
				designation: "3 years experience",
				image: "/assets/icons/sketch.svg",
			},
		],
	},
	{
		title: "Frontend developer",
		icon: CodeXml,
		description:
			"I enjoy writing code from scratch and bringing ideas to life in the browser.",
		direction: "justify-start",
		style: "md:-translate-x-10 text-left",
		skills: [
			{
				id: 5,
				name: "HTML",
				designation: "4 years experience",
				image: "/assets/icons/html.svg",
			},
			{
				id: 6,
				name: "CSS",
				designation: "4 years experience",
				image: "/assets/icons/css.svg",
			},
			{
				id: 7,
				name: "SASS",
				designation: "4 years experience",
				image: "/assets/icons/sass.svg",
			},
			{
				id: 8,
				name: "Tailwind CSS",
				designation: "2 years experience",
				image: "/assets/icons/tailwind.svg",
			},
			{
				id: 9,
				name: "Material UI",
				designation: "2 years experience",
				image: "/assets/icons/material-ui.svg",
			},
			{
				id: 10,
				name: "React JS",
				designation: "4 years experience",
				image: "/assets/icons/react.svg",
			},
			{
				id: 99,
				name: "Typescript",
				designation: "1 years experience",
				image: "/assets/icons/typescript.svg",
			},
			{
				id: 98,
				name: "Next JS",
				designation: "3 years experience",
				image: "/assets/icons/nextjs.svg",
			},
			{
				id: 11,
				name: "Codepen",
				designation: "3 years experience",
				image: "/assets/icons/codepen.svg",
			},
			{
				id: 12,
				name: "Git",
				designation: "4 years experience",
				image: "/assets/icons/git.svg",
			},
			{
				id: 13,
				name: "Github",
				designation: "4 years experience",
				image: "/assets/icons/github.svg",
			},
			{
				id: 14,
				name: "Gitlab",
				designation: "2 years experience",
				image: "/assets/icons/gitlab.svg",
			},
		],
	},
	{
		title: "Backend developer",
		icon: Server,
		description:
			"I enjoy writing code from the ground up, such as web servers and APIs, as well as database interactions.",
		direction: "justify-end",
		style: "md:translate-x-10 text-right",
		skills: [
			{
				id: 15,
				name: "Node JS",
				designation: "3 years experience",
				image: "/assets/icons/nodejs.svg",
			},
			{
				id: 30,
				name: "NPM",
				designation: "4 years experience",
				image: "/assets/icons/npm.svg",
			},
			{
				id: 16,
				name: "Express JS",
				designation: "3 years experience",
				image: "/assets/icons/express.svg",
			},
			{
				id: 17,
				name: "MongoDB",
				designation: "3 years experience",
				image: "/assets/icons/mongodb.svg",
			},
			{
				id: 18,
				name: "Visual Studio Code",
				designation: "4 years experience",
				image: "/assets/icons/vs-code.svg",
			},
			{
				id: 19,
				name: "Sublime Text",
				designation: "4 years experience",
				image: "/assets/icons/sublime-text.svg",
			},
			{
				id: 20,
				name: "Heroku",
				designation: "3 years experience",
				image: "/assets/icons/heroku.svg",
			},
			{
				id: 21,
				name: "Vercel",
				designation: "3 years experience",
				image: "/assets/icons/vercel.svg",
			},
			{
				id: 22,
				name: "Netlify",
				designation: "4 years experience",
				image: "/assets/icons/netlify.svg",
			},
			{
				id: 23,
				name: "Terminal",
				designation: "4 years experience",
				image: "/assets/icons/terminal.svg",
			},
		],
	},
];

export const themes = [
	{
		value: "light",
		icon: "/assets/icons/sun.svg",
	},
	{
		value: "dark",
		icon: "/assets/icons/moon.svg",
	},
	{
		value: "system",
		icon: "/assets/icons/laptop-settings.svg",
	},
];

export const interestedFields = [
	"Frontend development",
	"Backend development",
	"Full stack development",
];
