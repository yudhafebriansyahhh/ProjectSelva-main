import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { CircleUserRound, ShoppingCart, Search } from 'lucide-react';

export default function PageLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100 shadow px-24 py-5">
                <div className="flex items-center justify-around">
                    <ApplicationLogo />
                    <div className="flex items-center gap-10 text-sm    ">
                        <Link>Shop</Link>
                        <Link>On Sale</Link>
                        <Link>New Arivals</Link>
                        <Link>Brands</Link>
                    </div>
                    <div className="bg-gray-100 rounded w-[500px] rounded flex items-center px-5 text-gray-400 rounded-full">
                        <Search className="h-5 w-5"></Search>
                        <input type="text" placeholder="Search for products..." className="w-full focus:ring-none bg-transparent border-none active:outline-none focus:border-none focus:outline-none" />
                    </div>
                    <div className="flex items-center gap-5">
                        <ShoppingCart className="w-5 h-5"></ShoppingCart>
                        <CircleUserRound className="w-5 h-5"></CircleUserRound>
                    </div>
                </div>
            </nav>
            <main className="px-28 py-5">{children}</main>
        </div>
    );
}
