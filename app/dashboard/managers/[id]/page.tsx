import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { ManagerCard } from "./_components/ManagerCard";

export default async function ManagerPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const res = await fetch(`${API_URL}/managers/${id}`, {
    headers: await AuthHeaders(),
    next: { tags: [`dashboard:managers:${id}`, "dashboard:managers"] },
  });
  if (!res.ok) return null;

  const data: Manager = await res.json();
  if (!data) return null;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ManagerCard data={data} />
    </div>
  );
}