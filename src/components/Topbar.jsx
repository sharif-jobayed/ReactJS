
const Topbar = ({ pendingCount = 0 }) => {

	return (
		<>

			<div className="topBar">
				<div className="logoBox">
					<h1>My Todos</h1>
				</div>

				<div className="countBox">
					<span>Todos</span>
					<span>{pendingCount}</span>
				</div>
			</div>

		</>
	);
}

export { Topbar }
