import Image from "next/image";
import Link from "next/link";

interface Note {
  _id: string;
  title: string;
  content: string;
}

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-start">
      <div>
        <h2 className="font-semibold">{note.title}</h2>
        <p className="text-sm text-gray-600">{note.content}</p>
      </div>

      <div className="flex gap-3">
        <Link href={`/edit/${note._id}`}>
          <Image
            src="/assets/edit.png"
            alt="edit"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </Link>

        <Image
          src="/assets/dustbin.jpg"
          alt="delete"
          width={18}
          height={18}
          className="cursor-pointer"
          onClick={() => onDelete(note._id)}
        />
      </div>
    </div>
  );
}
