const PageTitle = (props) => {
  return (
    <h1 className="text-4xl font-extrabold leading-9 tracking-title text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
      {props.children}
    </h1>
  );
};

export default PageTitle;
