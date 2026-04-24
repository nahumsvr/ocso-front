import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { AuthHeaders } from "@/helpers/authHeaders"

export default async function CountManagerPage() {
  const res = await fetch(`${API_URL}/managers`, {
    headers: await AuthHeaders(),
    next: { tags: ['dashboard:managers'] }
  })

  const data: Manager[] = await res.json()
  console.log(data)

  const totalManagers = data.length;
  const totalInactiveManagers = data.filter(m => !m.location?.locationName).length;
  const avaregeSalary = Math.round(data.reduce((acc, m) => acc + m.managerSalary, 0) / totalManagers * 100) / 100;
  const maxSalary = data.reduce((acc, m) => m.managerSalary > acc ? m.managerSalary : acc, 0);

  return (
    <div>
      <p>Hay {totalManagers} manager{totalManagers !== 1 && 's'}</p>
      <p>Hay {totalInactiveManagers} manager{totalInactiveManagers !== 1 && 's'} sin locación</p>
      <p>El salario promedio es de ${avaregeSalary}</p>
      <p>El salario máximo es de ${maxSalary}</p>
    </div>
  )
}