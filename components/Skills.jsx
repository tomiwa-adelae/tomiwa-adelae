import { MdDesignServices } from "react-icons/md";
import { IoCodeSlashSharp } from "react-icons/io5";

const Skills = () => {
	return (
		<div className="skills">
			<div className="container">
				<h4 className="text-primary">Skills</h4>

				<div className="skills">
					<div>
						<h3>
							<MdDesignServices />
							Designer
						</h3>
						<p>
							Simple content structure, clean design patterns, and
							thoughtful interactions are important to me.
						</p>
						<h5>Things I enjoy designing:</h5>
						<ul>
							<li>UX</li>
							<li>UI</li>
							<li>Web Apps</li>
						</ul>
						<h5>Design Tools:</h5>
						<ul>
							<li>Figma</li>
							<li>Font Awesome</li>
							<li>React Icons</li>
							<li>Pen & Paper</li>
							<li>Sketch</li>
						</ul>
					</div>
					<div>
						<h3>
							<IoCodeSlashSharp />
							Frontend Developer
						</h3>
						<p>
							I enjoy writing code from scratch and bringing ideas
							to life in the browser.
						</p>
						<h5>Frontend Languages I speak:</h5>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>React JS</li>
							<li>Next JS</li>
							<li>Git</li>
						</ul>
						<h5>Development Tools:</h5>
						<ul>
							<li>Visual Studio Code</li>
							<li>Bootstrap</li>
							<li>Materialize CSS</li>
							<li>Tailwind CSS</li>
							<li>Codepen</li>
							<li>Github</li>
							<li>Gitlab</li>
							<li>Terminal</li>
						</ul>
					</div>
					<div>
						<h3>
							<IoCodeSlashSharp />
							Backend Developer
						</h3>
						<p>
							I enjoy writing code from the ground up, such as web
							servers and APIs, as well as database interactions.
						</p>
						<h5>Backend Languages I speak:</h5>
						<ul>
							<li>Node JS</li>
							<li>Express JS</li>
							<li>MongoDB</li>
						</ul>
						<h5>Development Tools:</h5>
						<ul>
							<li>Visual Studio Code</li>
							<li>Sublime text</li>
							<li>Terminal</li>
							<li>Git Bash</li>
							<li>Github</li>
							<li>Heroku</li>
							<li>Vercel</li>
							<li>Netlify</li>
							<li>Render</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
