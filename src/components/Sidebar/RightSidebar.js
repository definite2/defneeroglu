import React from "react";
import SidebarItem from "./SidebarItem";
import styled from "styled-components";
const SS = styled.span`
  position: absolute;
  top: 0px;
  left: -20px;
  width: 7px;
  height: 25px;
  background-color: #e2e2e1;
`;
const RightSidebar = ({ items }) => {
  const items2 = [
    { href: "/denemee", name: "Deneme" },
    { href: "/denemee2", name: "Deneme2" },
    { href: "/denemee3", name: "Deneme3" },
  ];
  return (
    <aside className="md:col-span-2 md:col-start-9 col-span-10 px-16 md:mt-80 max-h-screen border-0">
      <div className="sticky top-40 rounded-xl w-full h-full shadow-md p-4">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <h6 className="pb-2 relative text-2xl tracking-tighter">
            Categories
            <SS />
          </h6>

          <ul className="flex flex-col overflow-hidden divide-y divide-gray-200 dark:divide-gray-700">
            {items.slice(0, 5).map((frontmatter) => {
              const { slug, date, title, summary, tags, images } = frontmatter;
              <SidebarItem
                key={`sidebar-item-${title}`}
                href={`/blog/${slug}`}
                name={title}
              />;
            })}
          </ul>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-12">
          <h6 className="pb-2 relative text-2xl tracking-tighter">
            Related Posts
            <SS />
          </h6>

          <ul className="flex flex-col overflow-hidden divide-y divide-gray-200 dark:divide-gray-700">
            {items2.map((item, idx) => (
              <SidebarItem
                key={`sidebar-posts-item-${idx}`}
                href={item.href}
                name={item.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
