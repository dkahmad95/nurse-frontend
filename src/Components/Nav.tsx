import React from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  path: string;
  name: string;
}

const links: LinkProps[] = [
  { path: "/", name: "home" },
  { path: "/profile", name: "my profile" },
];

interface NavProps {
  linkStyles?: string;
  activeLinkStyles?: string;
  containerStyles?: string;
}

const Nav: React.FC<NavProps> = ({
  linkStyles = "",
  activeLinkStyles = "",
  containerStyles = "",
}) => {
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `capitalize ${linkStyles} ${isActive ? activeLinkStyles : ""}`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
