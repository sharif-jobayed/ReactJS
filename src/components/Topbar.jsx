const Topbar = (props) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-1 align-middle justify-between justify-items-center">
				<div className="grid justify-self-start text-2xl font-bold text-teal-700">My ToDos!</div>

				<div className="grid grid-cols-[3fr_1fr] gap-1 align-middle justify-between justify-items-center justify-self-end text-2xl ">
					<span className="text-teal-700">Pending</span>
					<span className="text-red-500 font-bold">{props.count}</span>
				</div>
			</div>
		</>
	);
}

export { Topbar }
