
import { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

const SideNav = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	}

	return (
		<div>
			<AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 md:hidden cursor-pointer z-[99]" />

			{
				nav
					? (<div className="fixed w-full h-screen flex flex-col justify-center items-center z-[20]">
						<a href="#main" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineHome size={20} />
							<span className="pl-4">Home</span>
						</a>
						<a href="#work" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<GrProjects size={20} />
							<span className="pl-4">Work</span>
						</a>
						<a href="#project" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineProject size={20} />
							<span className="pl-4">Projects</span>
						</a>
						<a href="#" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<BsPerson size={20} />
							<span className="pl-4">Resume</span>
						</a>
						<a href="#contact" className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-gray-200 shadow-md m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
							<AiOutlineMail size={20} />
							<span className="pl-4">Contact</span>
						</a>
					</div>)
					: (``)
			}

			<div className="fixed hidden md:block top-[25%] left-[1%] z-[10]">
				<div className="flex flex-col">
					<a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
						<AiOutlineHome size={25} />
					</a>
					<a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
						<GrProjects size={25} />
					</a>
					<a href="#project" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
						<AiOutlineProject size={25} />
					</a>
					<a href="#" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
						<BsPerson size={25} />
					</a>
					<a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
						<AiOutlineMail size={25} />
					</a>
				</div>
			</div>
		</div>
	);
}

export { SideNav }
