function About() {
  return (
    <div className=" w-full max-w-[540px] shadow-md mx-auto bg-gray-100 flex flex-col p-6 sm:p-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center sm:text-left ">About this App</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        This dashboard provides real-time weather updates and forecast for
        various locations. It fetches data from from a reliable weather API to
        ensure accuracy.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Developed using <span className="font-semibold">React</span> and
        <span className="font-semibold"> Tailwind CSS for fast and responsive design.</span> <br /> <br />
        Our goal is to make weather tracking simple, reliable, accessible and
        visually appealing.
      </p>
    </div>
  );
}

export default About;
