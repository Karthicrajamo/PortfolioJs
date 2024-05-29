import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
	if (currentStage === 1) {
		return (
			<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
				Hi, I'm
				<span className="font-semibold mx-2 text-white">Karthic Raja</span>🖐️
				<br />
				FullStack Developer
			</h1>
		);
	}
	if (currentStage === 2) {
		return (
			<div className="info-box">
				<p>
					Worked with Neulancers <br /> and picked up many skills along the way
				</p>
				<Link to="/about" className="neo-brutalism-white neo-btn">
					Learn More
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</Link>
			</div>
		);
	}

	if (currentStage === 3) {
		return (
			<div className="info-box">
				<p className="font-medium sm:text-xl text-center">
					Works with Mid-Level Projects
				</p>
                
				<Link to="/about" className="neo-brutalism-white neo-btn">
					Visit my portfolio
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</Link>
			</div>
		);
	}

	if (currentStage === 4) {
		return (
			<div className="info-box">
				<p className="font-medium sm:text-xl text-center">
                Let's take a look at my skills.
				</p>

				<Link to="/about" className="neo-brutalism-white neo-btn">
					View Skills
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</Link>
			</div>
		);
	}

    return null;
};

export default HomeInfo;
