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
        return null;
    }
    const { name, icon: Icon, items, path } = item;
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {
        if (items && items.length > 0) {
            return setExpanded(!expanded);
        }

        return router.push(path);
    };
    const isActive = useMemo(() => {
        if (items && items.length > 0) {
            if (items.find((item) => item.path === pathname)) {
                setExpanded(true);
                return true;
            }
        }

        return path === pathname;
    }, [items, path, pathname]);

    return (
        <>
            <div
                className={`flex items-center p-3 rounded-lg hover:bg-gray-200 cursor-pointer hover:text-sidebar-active justify-between
     ${isActive && "text-sidebar-active bg-gray-200"}
    `}
                onClick={onClick}
            >
                <div className="flex items-center space-x-2">
                    {/* <IoClose size={20} /> */}
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

