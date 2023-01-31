import React from "react";
import Props from "../Props";

function NotificationIcon(props: Props) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        d="M18.2002 8C18.2002 6.4087 17.5681 4.88258 16.4428 3.75736C15.3176 2.63214 13.7915 2 12.2002 2C10.6089 2 9.08277 2.63214 7.95755 3.75736C6.83234 4.88258 6.2002 6.4087 6.2002 8C6.2002 15 3.2002 17 3.2002 17H21.2002C21.2002 17 18.2002 15 18.2002 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9302 21C13.7544 21.3031 13.5021 21.5547 13.1984 21.7295C12.8948 21.9044 12.5506 21.9965 12.2002 21.9965C11.8498 21.9965 11.5056 21.9044 11.202 21.7295C10.8984 21.5547 10.646 21.3031 10.4702 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NotificationIcon;
