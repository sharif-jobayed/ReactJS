import workExperiences from '../data/workExperiences.json';

const Work = () => {
	return (
		<div id="work" className="grid md:grid-cols-3 gap-4 p-4 w-[85%] m-auto">

			{Object.keys(workExperiences).map((key) => {
				const experience = workExperiences[key];

				return (
					<div key={key} className="border p-4 rounded-lg shadow-lg hover:scale-105 transition-all">
						
						<h2 className="text-xl font-bold">{experience.position}</h2>
						<h3 className="text-lg font-semibold bg-slate-600 text-white text-center p-1">{experience.company}</h3>
						<p className="text-sm text-gray-600">{experience.duration}</p>
						<p className="text-sm text-gray-600">{experience.Location}</p>
						
						<ul className="list-disc pl-5 mt-2">
							{experience.skills.map((skill, index) => (
								<li key={index} className="text-sm text-gray-800">{skill}</li>
							))}
						</ul>
					
					</div>
				);
			})}

		</div>
	);
}

export { Work };
