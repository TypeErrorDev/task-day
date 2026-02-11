"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

function SideNav() {
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
      current: true,
    },
    {
      name: "Clients",
      href: "#",
      icon: UsersIcon,
      current: false,
    },
    {
      name: "Projects",
      href: "#",
      icon: FolderIcon,
      current: false,
    },
    {
      name: "Tasks",
      href: "#",
      icon: RectangleStackIcon,
      current: false,
    },
    {
      name: "Analytics",
      href: "#",
      icon: ChartPieIcon,
      current: false,
    },
  ];

  function classNames(...classes: (string | boolean | undefined | null)[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="flex flex-col justify-start p-5 border-r border-gray-400 h-screen w-50">
        {/* Logo */}
        <div>
          <Image
            src="/Logo.png"
            alt="TaskDay Logo"
            width={75}
            height={70}
            className="opacity-40"
          />
        </div>
        {/* Actual Nav Links */}
        <nav className="flex flex-1 flex-col mt-20">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black/5 text-black"
                          : "text-gray-400 hover:bg-white/5 hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-6 shrink-0"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
