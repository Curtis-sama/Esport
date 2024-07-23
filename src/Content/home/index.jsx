const Content = ({ games }) => {
	const handleClick = (name) => {
		console.log(name);
	};

	const listNameGames = games.map((game, index) => {
		const name = game.name
		return <div key={index} onClick={() => handleClick(name)}>{name} </div>
	})



	return (
		<div className="Content" >
			{listNameGames}

		</div>
	)
}

export default Content
