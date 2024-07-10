const Button = props => {
    const { children } = props;
    return (
    <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mx-1 transition-colors duration-200 ease-in-out">
                {children}
            </button>
    );
};
export default Button;
