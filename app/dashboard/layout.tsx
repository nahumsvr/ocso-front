import Header from "./_components/Header";
import SideBar from "./_components/_sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-screen h-screen bg-neutral-50">
                <Header />
                <div className="flex flex-row">
                    <SideBar />
                    {children}
                </div>
            </div>
        </>
    )
}