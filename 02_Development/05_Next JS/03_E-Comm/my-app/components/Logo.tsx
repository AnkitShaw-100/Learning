import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop",
          className
        )}
      >
        Shopcar <span>t</span>
      </h2>
    </Link>
  );
};

export default Logo;
