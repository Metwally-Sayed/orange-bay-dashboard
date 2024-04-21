"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Tickets",
    current: false,
    children: [
      { name: "Listed Tickets", href: "/tickets" },
      { name: "Tickets Category", href: "/tickets/category" },
    ],
  },

  { name: "Tour Guides", href: "/tourguides", current: false },
  { name: "Cruises", href: "/cruises", current: false },

  {
    name: "Selling Points And Products",
    current: false,
    children: [
      { name: "Selling Points", href: "/places" },
      { name: "Products", href: "/products" },
    ],
  },

  {
    name: "Reports",
    current: false,
    children: [
      { name: "Reports 1", href: "#" },
      { name: "Reports 2", href: "#" },
    ],
  },
  // { name: "Documents", href: "#", current: false },
  // { name: "Reports", href: "#", current: false },
];
// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <>
      <div className=" flex w-full h-screen">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 max-w-[25%] min-w-[20%]">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {!item.children ? (
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current ? "bg-gray-50" : "hover:bg-gray-50",
                            "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                          )}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50"
                                    : "hover:bg-gray-50",
                                  "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                                )}
                              >
                                <ChevronRightIcon
                                  className={classNames(
                                    open
                                      ? "rotate-90 text-gray-500"
                                      : "text-gray-400",
                                    "h-5 w-5 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Disclosure.Button>
                              <Disclosure.Panel as="ul" className="mt-1 px-2">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Disclosure.Button
                                      as="a"
                                      href={subItem.href}
                                      className={classNames(
                                        subItem.name === pathname
                                          ? "bg-gray-50"
                                          : "hover:bg-gray-50",
                                        "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                      )}
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  </li>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <Link
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <main className="py-10 px-4 sm:px-6 lg:px-8 min-w-[75%]">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
