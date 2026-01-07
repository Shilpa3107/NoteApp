import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-2 p-4 border-b">
      <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
      <h1 className="text-xl font-semibold">Note App</h1>
    </header>
  );
}
