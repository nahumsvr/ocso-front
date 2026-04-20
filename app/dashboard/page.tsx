import EmployeesLocation from "./@locations/_components/EmployeesLocation";

export default async function DashboardPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const store = (await searchParams)?.store;
    return (
        <div className="bg-neutral-50 w-full h-[90vh] overflow-y-auto flex flex-col px-10 py-4 gap-2">
            <EmployeesLocation store={store} />
        </div>
    )
}