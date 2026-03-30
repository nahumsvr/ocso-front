import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-gray-200 h-screen w-screen overflow-hidden grid">
    <div className="place-content-center place-self-center grid gap-4">
      <Image src="/oxxo.svg" alt="oxxo" width={100} height={0} className="place-self-center" />
      {children}
    </div>
  </div>;
}
