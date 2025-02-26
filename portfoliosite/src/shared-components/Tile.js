const Tile = ({ title, onClick }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow flex items-center justify-center w-full h-32 cursor-pointer transition hover:border-purple-200 hover:bg-purple-100"
        onClick={() => onClick(title)}>
            <div className="text-center p-4">
                <h3 className="text-xl font-extrabold leading-none tracking-tight text-gray-800">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default Tile;