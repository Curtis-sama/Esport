import { Link } from "react-router-dom";

const Content = ({ }) => {

	return (
		<div className="content">
			<Link to="/wiki/home" className="link">
				<div className="wiki">{"wiki"}</div>
			</Link>
			<Link to="/esport" className="link">
				<div className="esport">{'esport'}</div>
			</Link>
		</div>
	)
}

export default Content
