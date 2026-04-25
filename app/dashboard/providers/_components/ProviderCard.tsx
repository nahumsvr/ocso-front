import { Provider } from "@/entities";
import { Box, Envelope, Handset } from "@gravity-ui/icons";
import { Card, Separator } from "@heroui/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <Card>
            <Card.Header>
                <Card.Title className="font-bold text-lg">{provider.providerName}</Card.Title>
            </Card.Header>
            <Separator />
            <Card.Content className="">
                <div className="flex items-center gap-2">
                    <Envelope />
                    {provider.providerEmail}
                </div>
                <div className="flex items-center gap-2">
                    <Handset />
                    {provider.providerPhoneNumber ? provider.providerPhoneNumber : "No disponible"}
                </div>
                <div className="flex items-center gap-2">
                    <Box />
                    {provider.products ? `${provider.products.length} productos` : "Sin stock"}
                </div>
            </Card.Content>
        </Card>
    )
}