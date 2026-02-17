"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

function SideNav() {
  const pathname = usePathname(); // Get the current path (e.g., "/home")

  const navigation = [
    { name: "Home", href: "/home", icon: HomeIcon },
    { name: "Clients", href: "/home/clients", icon: UsersIcon },
    { name: "Jobs", href: "/home/jobs", icon: FolderIcon },
    { name: "Quotes", href: "/home/quotes", icon: CurrencyDollarIcon },
    { name: "Scheduler", href: "/home/scheduler", icon: CalendarDaysIcon },
    { name: "Invoices", href: "/home/invoices", icon: CreditCardIcon },
    { name: "Analytics", href: "/home/analytics", icon: ChartPieIcon },
  ];

  function classNames(...classes: (string | boolean | undefined | null)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-col p-5 border-r border-gray-100 h-screen w-64 shrink-0 bg-white">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <Image
          src="/Logo.png"
          alt="TaskDay Logo"
          width={150}
          height={150}
          className="opacity-40"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex flex-1 flex-col mt-10">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                // Check if this item is the active path
                const isCurrent = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        isCurrent
                          ? "bg-black/5 text-black"
                          : "text-gray-400 hover:bg-black/5 hover:text-black",
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          isCurrent
                            ? "text-[#6C38CA]"
                            : "text-gray-400 group-hover:text-black",
                          "size-6 shrink-0",
                        )}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
