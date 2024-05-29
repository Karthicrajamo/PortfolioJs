// import React from 'react'

import { experience, skills } from "../constants";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

export const About = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				Hello, I&apos;m{" "}
				<span className="blue-gradient_text font-semibold drop-shadow-sm">
					{" "}
					Karthic Raja
				</span>{" "}
				👋
			</h1>

			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>Full-stack Developer with experience at Neulancers.</p>
			</div>

			<div className="py-10 flex flex-col">
				<h3 className="subhead-text">My Skills</h3>

				<div className="mt-16 flex flex-wrap gap-12">
					{skills.map((skill, index) => {
						return (
							<div className="block-container w-20 h-20" key={index}>
								<div className="btn-back rounded-xl" />
								<div className="btn-front rounded-xl flex justify-center items-center">
									<img
										src={skill.imageUrl}
										alt={skill.name}
										className="w-1/2 h-1/2 object-contain"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="py-16">
				<h3 className="subhead-text">Work Experience</h3>
				<div className="mt-5 flex flex-col gap-3 text-slate-500">
					<p>
						I&apos;mve worked at Neulancers, continuously leveling up my skills
						and collaborating with talented individuals. Here&apos;ms the
						rundown:
					</p>
				</div>
				<div className="mt-12 flex">
					<VerticalTimeline>
						{experience.map((experiences, index) => {
							return (
								<VerticalTimelineElement
									key={index}
									date={experiences.date}
									iconStyle={{ background: experiences.iconBg }}
									icon={
										<div className="flex justify-center items-center h-full w-full ">
											<img
												src={experiences.icon}
												alt={experiences.company_name}
												className="w-[10%] h-[10%] object-contain"
											/>
										</div>
									}
									// contentStyle={{
									// 	borderBottom: "8px",
									// 	borderStyle:"solid",
									// 	borderBottomColor: experiences.iconBg,
									// 	boxShadow: "none",
									// }}
								>
									<div>
										<h3>{experiences.title}</h3>
										<p>{experiences.company_name}</p>
									</div>

									<ul>
										{experiences.points.map((point, index) => {
											return <li key={index} className="w-[45%]">{point}</li>;
										})}
									</ul>
								</VerticalTimelineElement>
							);
						})}
					</VerticalTimeline>
				</div>
			</div>
		</section>
	);
};
