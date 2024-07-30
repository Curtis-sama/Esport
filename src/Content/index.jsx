import { Link } from "react-router-dom";

const Content = ({ }) => {
// const buttons = document.querySelectorAll(".btn");
// const slides = document.querySelectorAll(".slide");

// buttons.forEach((button) => {
// 	button.addEventListener('click', (e) => {
// 		console.log(e.target.id);
// 	})

// 	})

	return (
		<div className="content">
			{/* <button className="btn" id="prev">&#10096;</button>
			<button className="btn" id="next">&#10097;</button> */}
			{/* <div className="blocHorizontale"> */}
				<Link to="/wiki/home" className="link">
        <div className="wiki">{"wiki"}</div>
					
				</Link>
				{/* <div className="slide valorant">{"valorant"}</div> */}
				<Link to="/esport" className="link">
        <div className="esport">{'esport'}</div>
					
				</Link>
			</div>
		// </div>
	)
}

export default Content
