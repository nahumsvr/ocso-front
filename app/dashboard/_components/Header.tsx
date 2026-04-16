import Image from "next/image";

export default function Header() {
    return (
        <div className="w-screen h-[10dvh] bg-neutral-300 flex flex-row items-center justify-center px-10">
            <Image src="/oxxo.svg" alt="Logo" width={100} height={100} draggable={false} loading="eager" />
        </div>
    )
}