import ManagerCard from "./_components/ManagerCard";

export default function ManagersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10 w-full h-[90vh] flex gap-10">
      <ManagerCard />
      {children}
    </div>
  )
}