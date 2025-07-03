"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { headerData } from "@/constants/data";
import { cn } from "@/lib/utils";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor ">
      {headerData?.map((item) => (
        <Link
          key={item?.key}
          href={item?.href}
          className={`hover:text-shop_light_green hoverEffect relative group ${
            pathname === item?.href && "text-shop_light_green"
          }`}
        >
          {item?.title}
          <span
            className={cn(
              "absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-shop_light_green transition-all duration-300",
              pathname === item?.href ? "w-1/2" : "w-0 group-hover:w-1/2"
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
