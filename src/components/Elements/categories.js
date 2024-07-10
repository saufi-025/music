const Categories = props => {
    const { children, title, size } = props;
    return (
        <div>
            <h2 className={`${size} ml-2 font-bold mb-4 text-white`}>{title}</h2>
            <div className="flex space-x-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
                {children}
            </div>
        </div>
    );
};
export default Categories;
