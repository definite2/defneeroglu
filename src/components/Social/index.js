import { Mail, GitHub, Linkedin, Twitter } from "react-feather";


// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: GitHub,
  linkedin: Linkedin,
  twitter: Twitter,
};

const SocialIcon = ({ kind, href, size = 2 }) => {
  if (!href) return null;

  const SocialSvg = components[kind];
  const hoverColor = (kind) => {
    if (kind === "mail") return "red";
    else if (kind === "github") return "gray";
    else return "blue";
  };
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={` text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
