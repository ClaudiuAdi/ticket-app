const Title = ({ children }) => {
  return (
    <div className="bg-overlay">
      <h2 className="w-full pt-20 flex-grow text-center text-3xl font-semibold text-white md:text-4xl">
        {children}
      </h2>
    </div>
  );
};

export default Title;
