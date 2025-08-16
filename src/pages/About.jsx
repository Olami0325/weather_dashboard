function About() {
  return (
    <div className="min-h-screen w-full max-w-[540px] shadow-md mx-auto bg-gray-100 flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">About this App</h1>
      <p className="text-gray-700 mb-4">
        This dashboard provides real-time weather updates and forecast for
        various locations. It fetches data from from a reliable weather API to
        ensure accuracy.
      </p>
      <p className="text-gray-700 mb-4">
        Developed using <span>React</span> and
        <span>Tailwind CSS for fast and responsive design</span> <br /> <br />
        Our goal is to make weather tracking simple, reliable, accessible and
        visually appealing.
      </p>
    </div>
  );
}

export default About;
