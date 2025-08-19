"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/dashboard", image: "/dashboard.jpg", label: "Dashboard" },
    { href: "/listings", image: "/listing.jpg", label: "Listings" },
    { href: "/users", image: "/user.jpg", label: "Users" },
    { href: "/request", image: "/request.jpg", label: "Request" },
    { href: "/applications", image: "/application.jpg", label: "Applications" },
  ];

  return (
   <div className="w-full h-[67px] border-b border-gray-100 flex items-center px-6 justify-between sticky top-0 z-50 bg-white">


    
      <div className="hidden md:flex w-full justify-around items-center p-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
           className="flex items-center justify-center gap-2 w-[170px] h-[38px] opacity-100 hover:bg-[#F5F5F5] hover:font-semibold transition-all duration-300 ease-in-out rounded"

          >
            <Image
              src={link.image}
              alt={link.href.replace("/", "")}
              width={24}
              height={24}
            />
            <span className="text-center">{link.label}</span>
          </Link>
        ))}

        <div className="relative w-[319px] h-[43px]">
          <input
            type="text"
            placeholder="Search listings, users here...."
            className="w-full h-full pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="/search.jpg"
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
        </div>
      </div>

  
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

   
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
            >
              <Image
                src={link.image}
                alt={link.href.replace("/", "")}
                width={24}
                height={24}
              />
              {link.label}
            </Link>
          ))}

        
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search listings, user here..."
              className="w-full h-[40px] pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="/search.jpg"
              alt="search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
        </nav>
      </div>

 
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Admin;
