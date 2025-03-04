const EducationCard = ({ image, imageAlt, institution, stat, statContext}) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg h-80" src={image} alt={imageAlt} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{institution}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        <div className="block">
          <div
            class="font-manrope font-bold text-4xl text-purple-600 mb-3 text-center"
          >
            {stat}<span className="text-2xl"> {statContext} </span>
          </div>
        </div>


      </div>
    </div>
  );

};

export default EducationCard;