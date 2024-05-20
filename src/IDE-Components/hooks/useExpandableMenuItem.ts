import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface ISubItem {
    name: string;
    path: string;
}

interface IUseConditionalRenderedHook {
    (items: ISubItem[] | undefined, path: string): { expanded: boolean; isActive: boolean; handleClick: () => void };
}

const useConditionalRenderedHook: IUseConditionalRenderedHook = (items, path) => {
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isActive = useMemo(() => {
        if (items && items.length > 0) {
            if (items.find((item) => item.path === pathname)) {
                setExpanded(true);
                return true;
            }
        }

        return path === pathname;
    }, [items, path, pathname]);

    const handleClick = () => {
        if (items && items.length > 0) {
            setExpanded(!expanded);
        } else {
            router.push(path);
        }
    };

    return { expanded, isActive, handleClick };
};

export default useConditionalRenderedHook;