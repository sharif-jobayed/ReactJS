
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'

const HeroSection = () => {
	return (
		<>
			<div className="" id="main">
				<img src="./src/assets/images/hero-image.jpeg" alt="Hero Image" className="w-full h-screen object-cover object-left" />
				<div className="absolute top-[0] left-[0] w-full h-screen bg-white/50">
					<div className="max-w-[700px] flex flex-col justify-center items-center gap-3 m-auto h-full w-full">
						<h2 className="text-3xl text-gray-700 text-center">
							{`I'm a `}

							<TypeAnimation
								sequence={[
									'Developer',
									1500,
									'Coder',
									1500,
									'Tech Enthusiast',
									1500,
								]}
								wrapper="span"
								speed={50}
								style={{ fontSize: '30px', display: 'inline-block' }}
								repeat={Infinity}
							/>
						</h2>
						<h1 className="text-4xl text-center text-gray-800 font-bold sm:text-5xl">{`I'm Sharif Jobayed`}</h1>

						<div className="flex gap-5">
							<a href="" className=""><FaFacebook size={25} /></a>
							<a href="" className=""><FaInstagram size={25} /></a>
							<a href="" className=""><FaLinkedin size={25} /></a>
							<a href="" className=""><FaGithub size={25} /></a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { HeroSection }
