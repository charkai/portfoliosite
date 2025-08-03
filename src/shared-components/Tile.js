const Tile = ({ title, onClick }) => {

    return (
        <div 
            className="relative overflow-hidden bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow flex items-center justify-center w-full h-32 cursor-pointer transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-purple-100 dark:before:bg-purple-700 before:duration-500 before:ease-out hover:shadow-purple-100 dark:hover:shadow-purple-700 hover:before:h-96 hover:before:w-96"
            onClick={() => onClick(title)}
            >
            <div className="text-center p-4 z-10 relative">
                <h3 className="text-xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-gray-200">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default Tile;