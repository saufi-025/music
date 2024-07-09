export const LargeCard = () => {
    return (
        <div className="mb-10">
            <h2 className="text-xl ml-2 font-bold mb-2 text-white">
                Video musik yang direkomendasikan
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800">
                <img
                    src="https://via.placeholder.com/400x200"
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
        </div>
    );
};
export const SmalCard = () => {
  return(
                        <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
                        <img
                            src="https://via.placeholder.com/100x100"
                            alt="When She Loved Me"
                            className="rounded-lg mb-2"
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            When She Loved Me
                        </p>
                    </div>
    )
}