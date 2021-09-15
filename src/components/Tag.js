import Link from "next/link";
import kebabCase from "lib/kebapCase";

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="flex items-center mr-3 text-sm font-medium uppercase  text-primary-600 hover:text-primary-500 dark:hover:text-primary-500">
        {text.split(" ").join("-")}
      </a>
    </Link>
  );
};

export default Tag;
