import { Suspense, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/fox";

export const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const { showAlert, alert, hideAlert } = useAlert();
	const [currentAnimation, setCurrentAnimation] = useState("idle");
	// const handleChange = ({ target: { name, value } }) => {
	// 	setForm((currForm) => {
	// 		return { ...currForm, [name]: value };
	// 	});
	// };
	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((currForm) => {
			return { ...currForm, [name]: value };
		});
	};

	const handleFocus = () => setCurrentAnimation("walk");
	const handleBlur = () => setCurrentAnimation("idle");

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setCurrentAnimation("hit");

		emailjs
			.send(
				"service_xf7wura",
				"template_indfq4l",
				{
					from_name: form.name,
					to_name: "Karthic Raja",
					from_email: form.email,
					to_email: "karthicraja2812@gmail.com",
					message: form.message,
					email: form.email,
					phone: form.phone,
				},
				"pjtgH_dVQwj1mDR67"
			)
			.then(() => {
				setLoading(false);
				showAlert({
					show: true,
					text: "Thank you for your message 😉",
					type: "success",
				});

				setTimeout(() => {
					// hideAlert();
					setCurrentAnimation("idle");
					hideAlert(false);
					setForm({
						name: "",
						email: "",
						phone: "",
						message: "",
					});
				}, 3000);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setCurrentAnimation("idle");
				showAlert({
					show: true,
					text: "I didn't recive your message 😉",
					type: "danger",
				});
			});
	};

	return (
		<section className="relative lg:flex-row flex-col flex max-container">
			{alert.show && <Alert {...alert} />}
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">Get in Touch</h1>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="w-full flex flex-col gap-7 mt-14"
				>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Karthic"
							required
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="karthicraja4@gmail.com"
							required
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Phone
						<input
							type="tel"
							name="phone"
							pattern="[0-9]{10}"
							// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							className="input"
							placeholder="+91"
							value={form.phone}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Your Message
						<textarea
							name="message"
							// rows="4"
							className="textarea"
							placeholder="Write your thoughts here..."
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<button type="submit" className="btn" disabled={loading}>
						{loading ? "Sending..." : "Submit"}
					</button>
				</form>
			</div>
			<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
				<Canvas
					camera={{
						position: [0, 0, 5],
						fov: 75,
						near: 0.1,
						far: 1000,
					}}
				>
					<directionalLight position={[0, 0, 1]} intensity={2.5} />
					<ambientLight intensity={1} />
					<pointLight position={[5, 10, 0]} intensity={2} />
					<spotLight
						position={[10, 10, 10]}
						angel={0.15}
						penumbra={1}
						intensity={2}
					/>
					<Suspense fallback={<Loader />}>
						<Fox
							currentAnimation={currentAnimation}
							position={[0.6, 0.15, 0]}
							rotation={[12.629, -0.6, 0]}
							scale={[0.5, 0.5, 0.5]}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};
