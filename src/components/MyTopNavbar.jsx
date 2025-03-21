import React from "react";
import { X } from "lucide-react";

export default function MyTopNavbar() {
  return (
    <div className="flex  item-center justify-between bg-blue-950 py-4  mr-auto">
      <p className="font-bold pl-120 text-white">
        Foesta Start a free trial and enjoy 1 months of Shopify for $1/month{" "}
        <span className="text-red-500">Get it now</span>{" "}
      </p>
      <p className="text-gray-600">
        {" "}
        <X />
      </p>
    </div>
  );
}
