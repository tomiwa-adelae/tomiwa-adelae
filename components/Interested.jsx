import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Interested = () => {
	return (
		<div className="interested">
			<div className="container">
				<h3>Interested in working with me?😁</h3>
				<p>
					I'm always willing to talk about product design and
					development work, as well as partnership opportunities.
				</p>
				<Link className="btn btn-primary" href="/contact">
					<span>Start a conversation</span>
					<IoIosArrowForward />
				</Link>
			</div>
		</div>
	);
};

export default Interested;
