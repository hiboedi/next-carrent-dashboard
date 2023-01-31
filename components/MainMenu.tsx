import Link from "next/link";
import React from "react";
import Logo from "./svg/Logo";
import DashboardIcon from "./svg/DashboardIcon";
import CarMenuIcon from "./svg/CarMenuIcon";
import BookingIcon from "./svg/BookingIcon";
import NotificationIcon from "./svg/NotificationIcon";
import SettingsIcon from "./svg/SettingsIcon";
import PaymentIcon from "./svg/PaymentIcon";
import TransactionIcon from "./svg/TransactionIcon";
import CarReportIcon from "./svg/CarReportIcon";
import MenuItem, { MenuProps } from "./MenuItem";
import LogoutIcon from "./svg/LogoutIcon";

const menus = [
  { icon: DashboardIcon, title: "Dashboard", href: "" },
  { icon: CarMenuIcon, title: "Drivers", href: "" },
  { icon: BookingIcon, title: "Bookings", href: "" },
  { icon: NotificationIcon, title: "Notifications", href: "" },
  { icon: SettingsIcon, title: "Settings", href: "" },
] as MenuProps[];

const reportMenus = [
  {
    icon: PaymentIcon,
    title: "Payment Details",
    href: "",
  },
  {
    icon: TransactionIcon,
    title: "Transactions",
    href: "",
  },
  {
    icon: CarReportIcon,
    title: "Car Reports",
    href: "/",
  },
] as MenuProps[];

function MainMenu() {
  return (
    <div className="flex w-60 flex-none flex-col justify-between bg-black p-6 text-white">
      <div className="flex flex-col space-y-5">
        {/* Logo */}
        <div>
          <Link href="/" className="block px-2 py-6">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            {menus.map((menu, index) => (
              <MenuItem
                key={index}
                title={menu.title}
                href={menu.href}
                icon={menu.icon}
              />
            ))}
          </ul>

          <hr className="ml-4 py-2 text-white/20" />

          <div>
            <p className="px-4 py-3 text-white/50">Report</p>

            <ul>
              {reportMenus.map((menu, index) => (
                <MenuItem
                  key={index}
                  title={menu.title}
                  href={menu.href}
                  icon={menu.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <button className="h3 flex w-full items-center justify-center rounded-lg bg-white/20 py-3 px-4">
          <LogoutIcon className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
