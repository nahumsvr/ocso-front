import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import Modal from "@/app/dashboard/_components/Modal"
import FormCreateManager from "./_components/FormCreateManager";
import { Location } from "@/entities";
import { Plus } from "@gravity-ui/icons";

const ManagersPage = async () => {
  const res = await fetch(`${API_URL}/managers`, {
    headers: await AuthHeaders(),
    next: {
      tags: ['dashboard:managers']
    }
  })

  const data: Manager[] = await res.json();

  const locations: Location[] = await fetch(`${API_URL}/locations`, {
    headers: await AuthHeaders(),
    next: { tags: ["dashboard:locations"] },
  })
    .then((res) => res.json())
    .catch((err) => { console.log(err); return [] })

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full text-gray-500 text-xl font-medium">
      <h1 className="text-center px-10">Para empezar, seleccione un administrador para ver sus detalles o cree uno nuevo.</h1>
      <Modal
        buttonLabel="Crear Manager"
        title="Crear Manager"
        variant="primary"
        icon={<Plus />}
      >
        <FormCreateManager locations={locations} />
      </Modal>
    </div>
  )
}

export default ManagersPage;