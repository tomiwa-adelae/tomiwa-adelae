import {
  CodeXml,
  Mail,
  MapPin,
  PencilRuler,
  Phone,
  Server,
} from "lucide-react";

export const aboutMe =
  "As a website programmer and freelancer for over 6 years, I've completed personal projects, remote work for agencies, and consulted for startups. Collaborating with talented individuals, I've created digital products for diverse uses. I'm quiet confident, naturally curious, and continually strive to enhance my skills with each design challenge.";

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
    image: "/assets/leadsage.png",
    title: "Leadsage – Real Estate Leasing & Management Platform",
    description:
      "Leadsage is a full-featured real estate leasing and management platform that connects landlords, tenants, and administrators. It simplifies property listings, lease management, and approvals with automated workflows and email notifications. The system includes role-based dashboards, dynamic analytics, and admin controls to manage categories, listings, and user activities. Designed with scalability in mind, Leadsage integrates AWS, Neon, and Tigres for robust performance and reliability.",
    github: "https://github.com/tomiwa-adelae/Leadsage-Africa",
    website: "https://www.leadsageafrica.com",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "NestJS",
        link: "https://nestjs.com/",
      },
      {
        name: "PostgreSQL (Neon)",
        link: "https://neon.tech/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Tigres (S3)",
        link: "https://tigres.io/",
      },
      {
        name: "Arcjet",
        link: "https://www.arcjet.com/",
      },
      {
        name: "AWS",
        link: "https://aws.amazon.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    image: "/assets/ekovibe.png", // Add a screenshot of the Ekovibe platform
    title: "Ekovibe – Lagos' Premier Event & Experience Platform",
    description:
      "Ekovibe is a full-featured event discovery and ticketing platform for Lagos' most exclusive experiences. Users can discover and book tickets for concerts, private dining, art exhibitions, nightlife, and luxury experiences. The platform supports multiple roles — regular users, vendors, and venue owners — each with dedicated dashboards. Features include QR code-based ticket scanning at the door, a merchandise vault, table reservation management, newsletter subscriptions, membership tiers, and wallet/withdrawal systems for vendors and venue owners. Paystack powers all payments end-to-end.",
    github: "https://github.com/tomiwa-adelae/Ekovibes",
    website: "https://www.ekovibe.com.ng",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "NestJS",
        link: "https://nestjs.com/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "AWS S3",
        link: "https://aws.amazon.com/s3/",
      },
      {
        name: "Paystack",
        link: "https://paystack.com/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/staxis.png", // Add a screenshot of the Staxis platform
    title: "Staxis – Managed Digital Support Platform",
    description:
      "Staxis by Zionstand Digital Technologies is a subscription-based managed digital-support platform for Nigerian businesses. It offers website care plans, IT infrastructure support, and data intelligence services. The platform features role-based dashboards for admins and clients, a full support ticket system, an IT manager module, billing and subscription management with Paystack, analytics, and a Tiptap-powered blog and content management system. Admins can broadcast notifications, manage SEO, and review a full audit log — all from a centralized control panel.",
    github: "https://github.com/tomiwa-adelae/zdt",
    website: "https://staxis.zionstand.com",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "NestJS",
        link: "https://nestjs.com/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "AWS S3",
        link: "https://aws.amazon.com/s3/",
      },
      {
        name: "Paystack",
        link: "https://paystack.com/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/nuvylux.png", // Add a screenshot of the Nuvylux platform
    title: "Nuvylux – Beauty, Fashion & Innovation Platform",
    description:
      "Nuvylux is a multi-sided marketplace blending artistry, culture, and technology for the beauty and fashion industry. Clients can discover and book verified beauty professionals — lash technicians, nail artists, hair stylists, and makeup artists — while also shopping a curated fashion marketplace. The platform supports multiple roles: clients, beauty architects (professionals), brands, and admins. Features include an AI-powered consultation experience, brand storefronts, product listings with cart and checkout, order management, wishlists, a rich blog, and Flutterwave-powered payments.",
    github: "https://github.com/tomiwa-adelae/nuvylux",
    website: "https://nuvylux.com.ng",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "NestJS",
        link: "https://nestjs.com/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "AWS S3",
        link: "https://aws.amazon.com/s3/",
      },
      {
        name: "Flutterwave",
        link: "https://flutterwave.com/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "TanStack Query",
        link: "https://tanstack.com/query",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/airmob.png", // Recommended: A high-res industrial or energy-themed UI shot
    title: "AIRMOB Nigeria – Energy Value Chain Platform",
    description:
      "A sophisticated industrial platform for AIRMOB Nigeria Limited, a leader in the oil and gas sector. The system integrates digital oilfield solutions using AI and IoT to optimize exploration support and lubricant production. It features a robust architecture for managing global energy supply chains, carbon capture initiatives, and sustainable drilling practices. The platform serves as a central hub for corporate communications, stakeholder engagement, and real-time monitoring of industrial services across Africa.",
    github: "https://github.com/tomiwa-adelae/Airmob", // Update with actual repo if public
    website: "https://airmob.net.ng/",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/forbliz.png", // Use a screenshot of that bold Amber/Black UI
    title: "Forbliz Global – Industrial Asset & Engineering Portal",
    description:
      "A high-performance industrial platform for Forbliz Global Resources (an AIRMOB subsidiary). The system facilitates project initiation for heavy equipment sourcing, civil engineering, and surface mining logistics. It features a complex Request for Quote (RFQ) engine that captures technical project parameters like tonnage and mobilization timelines, backed by an automated multi-channel notification system for operations management. Built to project corporate authority in the Nigerian construction and mining sectors.",
    github: "https://github.com/tomiwa-adelae/Forbliz", // Update with actual repo
    website: "https://forbliz.com", // Update with actual domain
    stack: [
      {
        name: "Next.js 14",
        link: "https://nextjs.org/",
      },
      {
        name: "Prisma ORM",
        link: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Zod",
        link: "https://zod.dev/",
      },
      {
        name: "Mailjet API",
        link: "https://www.mailjet.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/lgs.png",
    title: "LGS Edumanage – School Management System",
    description:
      "LGS Edumanage (Project Star) is a comprehensive school management platform designed for educational institutions. It streamlines student and staff management with complete profiles, attendance tracking, and communication tools. The platform features real-time assessments, curriculum management, detailed reporting, and secure payment processing with enterprise-grade security. Built with role-based access control for administrators, teachers, students, and parents, it provides tailored dashboards and functionality for each user type.",
    github: "https://github.com/Zionstand/Project-star-frontend",
    website: "https://lgs-app.zionstand.com/",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "NestJS",
        link: "https://nestjs.com/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Cloudflare",
        link: "https://www.cloudflare.com/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/afc.png",
    title: "African Free Fire Community – Esports Platform",
    description:
      "African Free Fire Community (AFC) is a competitive esports platform dedicated to Free Fire gaming across Africa. Founded in 2024, it serves as a centralized hub for players to compete, connect, and climb rankings. The platform features tournament management, team creation, skill-based leaderboards, event scheduling, and anti-cheat systems for fair play. With over 1,200 tournaments held and $500K+ in prize pools distributed, AFC empowers African gamers to showcase their skills on a continental stage.",
    github: "https://github.com/AFRICAN-FREEFIRE-COMMUNITY/AFC_Frontend",
    website: "https://africanfreefirecommunity.com/",
    stack: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    image: "/assets/grabcash.png",
    title: "Grabcash – Earn by Completing Social Tasks",
    description:
      "Grabcash is a micro-task earning platform that allows users to make money by completing simple online activities such as liking posts, sharing content, following accounts, or promoting brands. Built with a scalable admin dashboard, Grabcash features secure authentication, role-based access control, subscription management, and automated payout systems. It empowers creators, businesses, and individuals to connect through performance-based campaigns, making digital engagement both measurable and rewarding.",
    github: "https://github.com/tomiwa-adelae/Grabcash",
    website: "https://grabcash.vercel.app", // replace with your actual URL when deployed
    // style: "",
    stack: [
      {
        name: "NextJS",
        link: "https://nextjs.org/",
      },
      {
        name: "Prisma",
        link: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "AWS Amplify",
        link: "https://aws.amazon.com/amplify/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
      },
    ],
  },
  {
    image: "/assets/reenite.png",
    title: "Reenite – Workspace Booking Platform",
    description:
      "Reenite is a modern workspace booking platform that enables individuals to reserve desks, offices, meeting rooms, and creative spaces on-demand. Designed for a single space owner, Reenite combines seamless booking, secure payments, and admin-level controls to manage spaces, track bookings, and personalize customer experiences. From working to relaxing over parfait, Reenite brings flexibility to modern work culture.",
    github: "https://github.com/tomiwa-adelae/reenite",
    website: "https://app.reenite.com/all-spaces",
    // style: "order-first",
    stack: [
      {
        name: "NextJS",
        link: "https://nextjs.org/",
      },
      {
        name: "Clerk",
        link: "https://clerk.com",
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
      {
        name: "Cloudinary",
        link: "https://www.cloudinary.com/",
      },
      {
        name: "ShadCN UI",
        link: "https://ui.shadcn.com/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
      },
    ],
  },
  {
    image: "/assets/imole.png",
    title: "Imọlẹ Progressive Network",
    description:
      "I designed and developed a complete website for the Imole Network Foundation, a humanitarian non-profit organization based in Nigeria. The site showcases the foundation’s mission, projects, donation initiatives, volunteer programs, and news updates in a clean, accessible, and emotionally engaging format. This project emphasized content strategy, emotional design, and structured scalability to support the foundation’s long-term outreach and digital presence.",
    github: "https://github.com/tomiwa-adelae/Imole-Network-Foundation",
    website: "https://imoleprogressivenetwork.org",
    // style: "order-last",
    stack: [
      {
        name: "NextJS",
        link: "https://nextjs.org/",
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
      },
      {
        name: "Mailjet",
        link: "https://www.mailjet.com/",
      },
    ],
  },
  //   {
  //     image: "/assets/cardio-track.png",
  //     title: "Cardio Track",
  //     description:
  //       "Cardio Track is a full-stack web application built to help users effortlessly record, track, and analyze their cardiovascular activities. Users can log cardio sessions, monitor progress with insightful charts (heart rate, calories burned, distance covered), and receive real-time notifications and health alerts. The platform features a dynamic dashboard, personalized achievement highlights, and an automated email reminder system to keep users engaged. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and optimized for speed, responsiveness, and user experience.",
  //     github: "https://github.com/tomiwa-adelae/Cardio-Track",
  //     website: "https://cardio-track.vercel.app/",
  //     // style: "order-first",
  //     stack: [
  //       {
  //         name: "NextJS",
  //         link: "https://nextjs.org/",
  //       },
  //       {
  //         name: "Clerk",
  //         link: "https://clerk.com",
  //       },
  //       {
  //         name: "Cloudinary",
  //         link: "https://www.cloudinary.com/",
  //       },
  //       {
  //         name: "MongoDB",
  //         link: "https://www.mongodb.com/",
  //       },
  //       {
  //         name: "Mailjet",
  //         link: "https://www.mailjet.com/",
  //       },
  //       {
  //         name: "Lottie",
  //         link: "https://lottiefiles.com",
  //       },
  //       {
  //         name: "Cron",
  //         link: "https://console.cron-job.org/login",
  //       },
  //     ],
  //   },
  //   {
  //     image: "/assets/innovation.png",
  //     title: "Innovation 4.0",
  //     description:
  //       "Innovation 4.0 is a modern, dynamic website built to showcase the spirit of innovation and leadership. Designed for an annual event series, the site highlights the journey of Innovation from its inception to its fourth edition, featuring past themes, key organizers, and upcoming activities. The website is fully responsive, visually engaging, and optimized for performance. It includes features like an animated image slider, background video integration via Cloudinary for fast loading, keyboard navigation, and smooth transitions. I focused on creating an immersive user experience with clean design, accessibility in mind, and seamless content presentation. Technologies used: Next.js 14, TypeScript, Tailwind CSS, and Cloudinary.",
  //     github: "https://github.com/tomiwa-adelae/Innovation-4.0",
  //     website: "https://innovationconference.com.ng/",
  //     // style: "order-last",
  //     stack: [
  //       {
  //         name: "NextJS",
  //         link: "https://nextjs.org/",
  //       },
  //       {
  //         name: "MongoDB",
  //         link: "https://www.mongodb.com/",
  //       },
  //       {
  //         name: "Mailjet",
  //         link: "https://www.mailjet.com/",
  //       },
  //       {
  //         name: "Typescript",
  //         link: "https://www.typescriptlang.org/",
  //       },
  //     ],
  //   },
  {
    image: "/assets/yafpay.png",
    title: "YafPay",
    description:
      "Welcome to YafPay, where financial convenience knows no bounds. With our innovative banking app, YafPay, you can seamlessly transfer and deposit money anytime, anywhere in the world, putting the power of global transactions in the palm of your hand. Services offered includes: Powerful Mobile & Online App, Full Data Privacy Compliance, 100% Transparent Cost, Commitment Free, Free Plan Available, Debit Mastercard.",
    github: "https://github.com/ashu378/yafpay-website",
    website: "https://yafpay.com/",
    // style: "order-first",
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
  //   {
  //     image: "/assets/ontime.png",
  //     title: "QRCode Attendance system",
  //     description:
  //       "Taking attendance manually with pen and paper becomes cumbersome as the population increases. There is a crucial need for a swift attendance system that offers speed, authentication, and precise record-keeping. Implementing a QRCode system enhances the attendance process, making it five times faster. This platform operates smoothly and is already in use in schools and universities.",
  //     github: "https://github.com/tomiwa-adelae/On-Time",
  //     website: "https://ontime-zeta.vercel.app/",
  //     // style: "order-last",
  //     stack: [
  //       {
  //         name: "NextJS",
  //         link: "https://nextjs.org/",
  //       },
  //       {
  //         name: "NodeJS",
  //         link: "https://nodejs.org/en",
  //       },
  //       {
  //         name: "ExpressJS",
  //         link: "https://expressjs.com/",
  //       },
  //       {
  //         name: "MongoDB",
  //         link: "https://www.mongodb.com/",
  //       },
  //     ],
  //   },
  {
    image: "/assets/passify.png",
    title: "Online pass system",
    description:
      "Obtaining an exeat pass can be a stressful task for both students and administrators. This online platform streamlines the process, enhancing productivity for everyone involved.",
    github: "https://github.com/tomiwa-adelae/Online-pass-system",
    website: "https://passify-eight.vercel.app/",
    // style: "order-first",
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
  //   {
  //     image: "/assets/acusa.png",
  //     title: "Ajayi Crowther University Student Assembly",
  //     description:
  //       "Publicity is a crucial factor in enhancing a university's reputation. A website for the Student Assembly of Ajayi Crowther University would highlight the school's activities and achievements. This website features events, news, information about the executives, press release archives, and articles.",
  //     github: "https://github.com/tomiwa-adelae/ACUSA",
  //     website: "https://acusa.com.ng/",
  //     // style: "order-last",
  //     stack: [
  //       {
  //         name: "HTML",
  //         link: "https://en.wikipedia.org/wiki/HTML",
  //       },
  //       {
  //         name: "CSS",
  //         link: "https://en.wikipedia.org/wiki/CSS",
  //       },
  //       {
  //         name: "JavaScript",
  //         link: "https://en.wikipedia.org/wiki/JavaScript",
  //       },
  //       {
  //         name: "SASS",
  //         link: "https://sass-lang.com/",
  //       },
  //     ],
  //   },
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
