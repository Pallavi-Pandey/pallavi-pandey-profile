'use client';

import { RiCodeSSlashFill, RiLinkedinFill, RiGithubFill, RiTerminalFill, RiCommandFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: 'https://leetcode.com/Pallavi-Pandey/',
    name: <RiCodeSSlashFill />
  },
  {
    path: 'www.linkedin.com/in/pallavi-pandey-023',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/Pallavi-Pandey',
    name: <RiGithubFill />
  },
  // {
  //   path: '/',
  //   name: <RiTerminalFill />
  // },
  // {
  //   path: '/',
  //   name: <RiCommandFill />
  // },
]
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>

  )
}

export default Socials