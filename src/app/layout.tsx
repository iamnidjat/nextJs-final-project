"use client";
import Link from "next/link";
import styles from "./layout.module.css";
import { Nunito } from "next/font/google";
import Logo from "../../public/icons/Logo";
import Iconer from "./components/Iconer/Iconer";
import { usePathname } from "next/navigation";
import SideBarActivity from "../../public/icons/SideBarActivity";
import { useEffect, useState } from "react";
import NotificationsIcon from "../../public/icons/NotificationsIcon";
import ProfileIcon from "../../public/icons/ProfileIcon";
import ArrowDown from "../../public/icons/ArrowDown";
import HappyEmoji from "../../public/icons/HappyEmoji";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import BudgetIcon from "../../public/icons/BudgetIcon";

const nunito = Nunito({ subsets: ["latin"] });

const links = [
  { title: "Dashboard", href: "/", icon: "DashboardIcon", isActive: false },
  { title: "Staff", href: "/staff", icon: "StaffIcon", isActive: false },
  {
    title: "Payment Voucher",
    href: "/payment_voucher",
    icon: "StaffIcon",
    isActive: false,
  },
  {
    title: "Office Budget",
    href: "/office_budget",
    icon: "BudgetIcon",
    isActive: false,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeLinks, setActiveLinks] = useState(links);
  const pathname = usePathname();

  useEffect(() => {
    setActiveLinks(
      activeLinks.map((link) => ({
        ...link,
        isActive: link.href === pathname,
      }))
    );
  }, [pathname]);

  return (
    <html lang="en" className={nunito.className}>
      <body style={{ margin: 0, backgroundColor: "#F8F9FD" }}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.logo_container}>
              <Logo />
            </div>
            <div>
              <ul className={styles.links}>
                {activeLinks.map((link, index) => (
                  <li key={index}>
                    {link.isActive && (
                      <SideBarActivity className={styles.sidebar_activity} />
                    )}
                    <Link href={link.href}>
                      <div className={styles.sidebar_elems}>
                        <Iconer iconName={link.icon} isActive={link.isActive} />
                        <a
                          style={{ marginLeft: "5px" }}
                          className={`${styles.sidebar_link_text} ${
                            link.isActive && styles.active_elem
                          }`}
                        >
                          {link.title}
                        </a>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.page_container}>
            <div className={styles.header_container}>
              <div className={styles.header_text}>
                <div className={styles.header_text_bold}>
                  Welcome, Mr. Otor John
                  <HappyEmoji />
                </div>
                <div className={styles.header_text_small}>
                  Today is Saturday, 11th November 2022
                </div>
              </div>
              <div className={styles.header_icons}>
                <NotificationsIcon />
                <ProfileIcon className={styles.profile_icon} />
                <div className={styles.profile_details}>
                  <div className={styles.profile_name}>Otor John</div>
                  <div className={styles.profile_role}>HR Office</div>
                </div>
                <ArrowDown className={styles.arrow_down} />
              </div>
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
