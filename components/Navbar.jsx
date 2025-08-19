import React from 'react'
import Link from "next/link";
import {  Bell, Calendar, Wallet, MessageSquare} from "lucide-react";

const links = [
  { href: "/alert", icon: Bell, label: "alert" },
  { href: "/calendar", icon: Calendar, label: "calendar" },
  { href: "/budgeting", icon: Wallet, label: "budgeting" },
  { href: "/message", icon: MessageSquare, label: "message" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 sm:p-4 bg-black text-white">
      <div className="flex items-center gap-2 ml-4 sm:ml-12">
        <img src="./vector.jpg" alt="logo" className="w-6 h-6 sm:w-8 sm:h-8" />
        <h1 className="text-base sm:text-lg font-bold">myxellia</h1>
      </div>
      <ul className="flex gap-4 sm:gap-6 items-center mr-4 sm:mr-10">
        {links.map(({ href, icon: Icon }, index) => (
          <li key={index}>
            <Link href={href} className="flex items-center gap-1 sm:gap-2">
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </Link>
          </li>
        ))}
        <img 
          src="./username.jpg" 
          alt="user" 
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" 
        />
      </ul>
    </nav>
  );
}
