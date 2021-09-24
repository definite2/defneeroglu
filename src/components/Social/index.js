import { Mail, GitHub, Linkedin, Twitter } from "react-feather";


// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: GitHub,
  linkedin: Linkedin,
  twitter: Twitter,
};

const SocialIcon = ({ kind, href, size = 2,className }) => {
  if (!href) return null;

  const SocialSvg = components[kind];
  // TODO make dynamic hover color
  const hoverColor = (kind) => {
    if (kind === "mail") return "text-red-400";
    else if (kind === "github") return "text-gray-700";
    else return "text-blue-500";
  };
  return (
    <a
      className="text-sm text-gray-600 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`${className} h-${size} w-${size} hover:text-primary-500`}
      />
    </a>
  );
};

export default SocialIcon;
