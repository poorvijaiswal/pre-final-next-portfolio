"use client";
import { useMemo, useState } from "react";
import { IoClose } from 'react-icons/io5';
import { usePathname, useRouter } from "next/navigation";

import SubMenuItem from "./sub_Item";
import { IoMdArrowDropdown } from "react-icons/io";

interface ISidebarItem {
    name: string;
    path: string;
    icon: React.ReactNode;
    items?: ISubItem[];
}

interface ISubItem {
    name: string;
    path: string;
}

const SidebarItem = ({ item }: { item?: ISidebarItem }) => {
    if (!item) {
        return null;  // No change here, still return null if item is not provided
    }

    const { name, icon: Icon, items, path } = item;

    // Moved useState, useRouter, usePathname, and useMemo hooks to the top of the component
    const [expanded, setExpanded] = useState(false);  // Define state for expansion
    const router = useRouter();  // Get router instance
    const pathname = usePathname();  // Get current path

    const isActive = useMemo(() => {
        if (items && items.length > 0) {
            if (items.find((item) => item.path === pathname)) {
                setExpanded(true);  // Expand if current path is one of the submenu items
                return true;  // Mark as active
            }
        }

        return path === pathname;  // Mark as active if current path matches the main item path
    }, [items, path, pathname]);  // Dependencies for useMemo

    const onClick = () => {
        if (items && items.length > 0) {
            return setExpanded(!expanded);  // Toggle expansion if there are submenu items
        }

        return router.push(path);  // Navigate to path if no submenu items
    };

    return (
        <>
            <div
                className={`flex items-center p-3 rounded-lg hover:bg-gray-200 cursor-pointer hover:text-sidebar-active justify-between
     ${isActive && "text-sidebar-active bg-gray-200"}
    `}
                onClick={onClick}
            >
                <div className="flex items-center space-x-2">
                    {/* Removed IoClose example, keeping placeholder for Icon */}
                    <p className="text-sm font-semibold">{name} </p>
                </div>
                {items && items.length > 0 && <IoMdArrowDropdown size={20} />}
            </div>
            {expanded && items && items.length > 0 && (
                <div className="flex flex-col space-y-1 ml-10">
                    {items.map((item) => (
                        <SubMenuItem key={item.path} item={item} />
                    ))}
                </div>
            )}
        </>
    );
};

export default SidebarItem;
