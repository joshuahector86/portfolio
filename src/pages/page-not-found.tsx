const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center mt-20 ">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <div className="text-xl">
        Sorry, the page you're looking for doesn't exist.
      </div>
      <div className="text-lg mt-4">
        <p>
          Please check the URL or return to the{" "}
          <a href="/" className="underline hover:text-blue-500">
            homepage.
          </a>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
