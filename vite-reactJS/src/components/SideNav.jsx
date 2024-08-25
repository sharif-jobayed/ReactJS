
import { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';

const SideNav = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
		console.dir(`State changed`);
	}

	return (
		<div>
			<AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 md:hidden cursor-pointer z-[99]" />

			{
				nav
					? <div className="fixed w-full h-screen flex flex-col justify-center items-center z-[20]">
						<a href="#" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineHome size={20} />
							<span className="pl-4">Home</span>
						</a>
						<a href="#" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineHome size={20} />
							<span className="pl-4">Work</span>
						</a>
						<a href="#" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineHome size={20} />
							<span className="pl-4">Projects</span>
						</a>
						<a href="#" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineHome size={20} />
							<span className="pl-4">Resume</span>
						</a>
						<a href="#" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineHome size={20} />
							<span className="pl-4">Contact</span>
						</a>
					</div>
					: <div className=""></div>
			}
		</div>
	);
}

export { SideNav }
