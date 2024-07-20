import hero from "../assets/images/hero.jpg";
import meta from "../assets/images/meta.png";
import shopify from "../assets/images/shopify.png";
import starbucks from "../assets/images/starbucks.png";
import tesla from "../assets/images/tesla.png";
import logo from "../assets/images/logo.png";

export { hero, meta, shopify, starbucks, tesla, logo };

import css from "../assets/icons/css.svg";
import express from "../assets/icons/express.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import mongodb from "../assets/icons/mongodb.svg";
import motion from "../assets/icons/motion.svg";
import mui from "../assets/icons/mui.svg";
import nextjs from "../assets/icons/nextjs.svg";
import nodejs from "../assets/icons/nodejs.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import sass from "../assets/icons/sass.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import typescript from "../assets/icons/typescript.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import car from "../assets/icons/car.svg";
import estate from "../assets/icons/estate.svg";
import pricewise from "../assets/icons/pricewise.svg";
import snapgram from "../assets/icons/snapgram.svg";
import summiz from "../assets/icons/summiz.svg";
import threads from "../assets/icons/threads.svg";
import arrow from "../assets/icons/arrow.svg";
import contact from "../assets/icons/contact.svg";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";
import java from "../assets/icons/icons8-java.svg";
import python from "../assets/icons/icons8-python.svg";
import cpp from "../assets/icons/icons8-c++.svg";
import c from "../assets/icons/icons8-c.svg";
import php from "../assets/icons/icons8-php.svg";
import dj from "../assets/icons/django.png";
import neulancers from "../assets/icons/neulancers-logo-white.png";
import harness from "../assets/images/HarnessLogo.png";
import p1 from "../assets/images/logo.webp"

export const skills = [
	{ imageUrl: css, name: "CSS", type: "Frontend" },
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "Github",
		type: "Version Control",
	},
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "Javascript",
		type: "Frontend",
	},
	{
		imageUrl: mongodb,
		name: "Mongodb",
		type: "Backend",
	},
	{
		imageUrl: java,
		name: "Java",
		type: "Backend",
	},
	{
		imageUrl: python,
		name: "Python",
		type: "Backend",
	},
	{
		imageUrl: c,
		name: "C",
		type: "Backend",
	},
	{
		imageUrl: cpp,
		name: "C++",
		type: "Backend",
	},
	{
		imageUrl: php,
		name: "php",
		type: "Backend",
	},
	{
		imageUrl: dj,
		name: "Django",
		type: "Backend",
	},
	{
		imageUrl: nextjs,
		name: "NextJs",
		type: "Frontend",
	},
	{
		imageUrl: react,
		name: "ReactJs",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "TailwindCSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "Typescript",
		type: "Frontend",
	},
];

export const experience = [
	{
		title: "FullStack Developer",
		company_name: "Neulancers",
		icon: neulancers,
		iconBg: "#accbc0",
		date: "2023 - 2024",
		points: [
			"Led the end-to-end development of webapp, serving as both Backend and Frontend developer, with a focus on implementing dynamic rendering for the Product page using NextJs.",
			"Worked with a team to plan and build  Ecommerce website as a backend developer using Django.",
		],
	},
	{
		title: "Software Engineer Trainee",
		company_name: "Harness DigiTech Private Ltd",
		icon: harness,
		iconBg: "rgba(55, 136, 229, 0.65)",
		date: "2024",
		points: [
			"Collaborate with cross-functional teams to define, design, and ship new features.",
			"Write clean, maintainable, and efficient code using React Native.",
			"Assist in the integration of RESTful APIs and third-party services.",
			"Participate in code reviews to maintain high-quality code.",
			"Debug and resolve technical issues to ensure a smooth user experience.",
			"Continuously learn and implement best practices in mobile app development.",
		],
	},

];

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "Github",
		iconUrl: github,
		link: "https://github.com/karthicrajamo",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/karthic-raja/",
	}
]

export const projects = [
	{
		iconUrl: p1,
		theme: "btn-back-orange",
		name: "Game Hub",
		description: "Developed a production-grade React application for building a Game Hub.",
		link: "https://github.com/Karthicrajamo/Game_hub--React_vite_ts"
	},
	{
		iconUrl: dj,
		theme: "btn-back-green",
		name: "Shopping cart(Django Api)",
		description: "Developed a complete shopping cart system using Django Rest API.",
		link: "https://github.com/Karthicrajamo/Django_dev"
	}
]