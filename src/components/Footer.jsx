function Footer() {
  return (
    <footer className="w-full bg-sky-400 mt-auto text-white font-semibold dark:bg-gray-800  dark:text-gray-100 text-center p-4">
      <p>
        &copy; {new Date().getFullYear()} Weather Dashboard. All rights reserved.
        
      </p>
    </footer>
  );
}

export default Footer;
