const LoadingSpinner = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div className="relative flex items-center">
        <p className="text-5xl font-bold text-gray-500">L</p>
        <div className="w-9 h-9 border-8 border-dashed rounded-2xl animate-spin mt-3 mx-2 border-rose-500"></div>
        <p className="text-5xl font-bold text-gray-500">ading....</p>
        {/* <p className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400   animate-pulse">
          Loading...
        </p> */}
      </div>
    </div>
  );
};

export default LoadingSpinner;
