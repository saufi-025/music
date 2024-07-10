const LargeCard = props => {
    return (
        <div className="flex-none bg-white p-4 rounded-lg shadow-md dark:bg-gray-800">
            <img
                src="https://via.placeholder.com/350x200"
                alt="Heather - Conan Gray (cover)"
                className="rounded-lg mb-4"
            />
            <h3 className="text-xl mb-2 font-semibold dark:text-white">
                Heather - Conan Gray (cover)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
                Kylie · 5,9 jt x ditonton
            </p>
        </div>
    );
};
const SmallCard = props => {
    const { src, alt, desk } = props;
    return (
        <div className="flex-none bg-white p-4 rounded-lg shadow-md w-auto dark:bg-gray-800">
            <img src={src} alt={alt} className=" rounded-lg " />
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                {desk}
            </p>
        </div>
    );
};
export { LargeCard, SmallCard };
