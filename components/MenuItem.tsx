import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface MenuProps {
  icon: any;
  title: string;
  href: string;
}

function MenuItem(props: MenuProps) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={props.href}
        className={`relative flex rounded py-3 px-4 ${
          router.route == props.href
            ? "button-text bg-primary "
            : "opacity-75 hover:bg-primary"
        }`}
      >
        {router.route == props.href && (
          <span className="absolute left-0 top-1/2 h-9 w-[6px] -translate-y-1/2 rounded bg-white"></span>
        )}
        <props.icon className="mr-3" />
        {props.title}
      </Link>
    </li>
  );
}

export default MenuItem;
