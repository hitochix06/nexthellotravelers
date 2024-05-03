const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="p-4 flex justify-between">
        <div className="flex items-center">
          <a href="/" className="logo">
            <img src="./logo.png" alt="Logo" width={100} />
          </a>
          <span className="text-gray-600">helloTravels</span>
        </div>
        <div className="lg:flex">
          <a
            href="https://www.linkedin.com/in/pachara-philibert/"
            target="blank"
            className=" text-gray-600 px-4"
          >
            LinkedIn
          </a>
          <a
            href="https://pphilibert-web.eu/"
            target="blank"
            className="  text-gray-600 px-4 "
          >
            Portfolio
          </a>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
