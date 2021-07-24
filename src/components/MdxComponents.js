import Image from "next/image";
import CustomLink from "./CustomLink";
const MdxComponents = {
  Image,
  a: CustomLink,
  strong: ({ ...props }) => <strong {...props} className="font-semibold" />,
  h2: ({ ...props }) => {
    return (
      <h2
        {...props}
        data-heading
        className="flex items-baseline mb-8 text-2xl font-bold leading-10 group mt-14 lg:text-3xl text-accent"
      />
    );
  },
  h3: ({ ...props }) => {
    return (
      <h3
        {...props}
        data-heading
        className="flex items-baseline mb-4 text-2xl font-bold leading-tight group mt-14 text-accent"
      />
    );
  },
  p: ({ ...props }) => {
    return <p {...props} className="my-6 leading-7 lg:leading-8" />;
  },
  code: ({ children, showLineNumbers, fileName, id }) => {
    return (
      <>
        {fileName && <div className="w-full code-filename">{fileName}</div>}
        <code
          className={classNames("", {
            "line-numbers": showLineNumbers !== undefined,
          })}
          id={id}
        >
          {children}
        </code>
      </>
    );
  },
  em: ({ ...props }) => {
    return <em {...props} className="italic" />;
  },
  hr: ({ ...props }) => {
    return <hr {...props} className="my-10 border-accent" />;
  },
  ul: (props) => (
    <ul className="mb-4 leading-relaxed list-disc list-inside" {...props} />
  ),
  li: (props) => <li className="mt-3" {...props} />,
};

export default MdxComponents;
