"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "../../components/Header";

interface Note {
  _id: string;
  title: string;
  content: string;
}

export default function EditNote() {
  const params = useParams();
  const router = useRouter();

  // Ensure id is a string
  const id = typeof params.id === "string" ? params.id : "";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch note by id
  useEffect(() => {
    if (!id) return;

    const fetchNote = async () => {
      const res = await fetch(`/api/notes?id=${id}`);
      const note: Note = await res.json();
      setTitle(note.title);
      setContent(note.content);
    };

    fetchNote();
  }, [id]);

  // Update note
  const updateNote = async () => {
    if (!id) return;

    await fetch("/api/notes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        content,
      }),
    });

    router.push("/");
  };

  return (
    <>
      <Header />

      <main className="p-4 space-y-3">
        <input
          className="border p-2 w-full rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          className="border p-2 w-full rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />

        <button
          onClick={updateNote}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </main>
    </>
  );
}
