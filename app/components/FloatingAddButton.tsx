import Link from "next/link";
import Image from "next/image";

export default function FloatingAddButton() {
  return (
    <Link href="/create">
      <div className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full shadow-lg cursor-pointer">
        <Image src="/assets/plus.jpg" alt="add" width={24} height={24} />
      </div>
    </Link>
  );
}
