import { API_URL } from "@/constants"
import { Provider } from "@/entities"
import ProviderCard from "../_components/ProviderCard"

const ProvierPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    return <div>Show {id}</div>
}

export default ProvierPage