'use client'

import Link from "next/link";

import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface PropsLink {
  path: string;
  text: string;
}

export const ActiveLink = ({path, text}: PropsLink) => {
  const pathName = usePathname();
  
  const linkClasses = {
    active: `${style.link} ${style['active-link']}` ,
    noActive:`${style.link}`
  }

  const linkClass = pathName === path? 
    linkClasses.active
    :linkClasses.noActive; 
  
  return (
    <Link className={linkClass} href={path}> 
      {text}
    </Link>
  )
}
