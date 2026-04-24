import { Spinner } from "@heroui/react";

export default function LoadingCountManagerPage() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Spinner className="size-10" />
        </div>
    )
}