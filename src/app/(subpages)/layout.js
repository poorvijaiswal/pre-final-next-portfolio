import HomeBtn from "../portcomponents/HomeBtn"

export default function SubPagesLayout({ children }) {
    return (
        <main className=" min-h-screen items-center justify-center radialContainer">
            <HomeBtn />
            {children}
        </main>
    );
}
