import { Html } from "@react-three/drei";

const Loader = () => {
	return (
		<Html>
			<div className="flex justify-center items-center">
				<div className="w-10 h-10 border-2 bg-blue-500 border-blue-500 rounded-full animate-bounce"></div>
			</div>
		</Html>
	);
};

export default Loader;
