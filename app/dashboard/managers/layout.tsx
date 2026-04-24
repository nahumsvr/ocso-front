import { Card } from "@heroui/react";
import ManagerCard from "./_components/ManagerCard";

export default function ManagersLayout({
  children,
  count
}: {
  children: React.ReactNode
  count: React.ReactNode
}) {
  return (
    <div className="p-10 w-full h-full flex gap-10">
      <ManagerCard />
      <div className="w-full h-full flex flex-col items-center gap-10">
        <Card className="w-[800px]">
          {count}
        </Card>
        {children}
      </div>
    </div>
  )
}