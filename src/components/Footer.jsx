function Footer() {
  return (
    <footer className="w-full bg-sky-400 dark:bg-gray-800 text-white dark:text-gray-100 py-4 mt-auto">
      <div className=" max-w-[540px] mx-auto px-4 lg:px-8 text-center"> 
        &copy; {new Date().getFullYear()} Weather Dashboard. All rights reserved.   
      </div>
    </footer>
  );
}

export default Footer;
