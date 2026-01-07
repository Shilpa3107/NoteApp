"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import FloatingAddButton from "./components/FloatingAddButton";

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    setNotes(await res.json());
  };

  const deleteNote = async (id: string) => {
    await fetch("/api/notes", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Header />

      <main className="p-4 space-y-4">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onDelete={deleteNote}
          />
        ))}
      </main>

      <FloatingAddButton />
    </>
  );
}
