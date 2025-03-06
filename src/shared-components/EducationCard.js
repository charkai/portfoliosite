const EducationCard = ({ image, imageAlt, institution, degree, startDate, endDate, info, stat, statContext }) => {
	return (
		<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
			<img className="rounded-t-lg h-60 md:h-80 w-auto" src={image} alt={imageAlt} />
			<div className="p-5 flex-grow">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{institution}</h5>
				<p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">{degree}</p>
				<p className="mb-3 text-sm font-normal text-gray-700 italic dark:text-gray-400">{startDate} - {endDate}</p>
				<p className="mb-3 text-sm font-normal text-gray-600 dark:text-gray-300">{info}</p>
			</div>

			<div className="block">
				<div className="font-manrope font-bold text-4xl text-purple-600 mb-3 text-center">
					{stat}<span className="text-2xl"> {statContext} </span>
				</div>
			</div>
		</div>
	);

};

export default EducationCard;