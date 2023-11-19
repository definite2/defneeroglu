const PageTitle = (props) => {
  return (
    <h1 className="max-w-screen-md px-5 mt-12 mx-auto mb-4 text-3xl font-bold leading-tight text-center sm:px-0 text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
      {props.children}
    </h1>
  )
}

export default PageTitle
