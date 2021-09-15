import React from "react";
import CustomLink from "../CustomLink";
const SidebarItem = ({ href, name }) => {
  return (
    <li className="py-3">
      <CustomLink
        className="nav-link  hover:text-primary-600 dark:hover:text-primary-400 dark:text-gray-400"
        href={href}
      >
        <span className="fa fa-user mr-2"></span>
        {name}
      </CustomLink>
    </li>
  );
};

export default SidebarItem;
