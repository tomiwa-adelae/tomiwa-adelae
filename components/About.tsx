import Image from "next/image";

const About = () => {
	return (
		<div className="about">
			<div className="container">
				<Image
					src={"/tomiwaadelae.jfif"}
					alt="Tomiwa Adelae"
					height={1000}
					width={1000}
				/>
				<h3>Hello, my name is Tomiwa Adelae👋</h3>
				<p>
					As a website programmer and freelancer for over four years,
					I've completed personal projects, remote work for agencies,
					and consulted for startups. Collaborating with talented
					individuals, I've created digital products for diverse uses.
					I'm quietly confident, naturally curious, and continually
					strive to enhance my skills with each design challenge.
				</p>
			</div>
		</div>
	);
};

export default About;
