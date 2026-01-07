import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

interface Note {
  _id?: string;
  title: string;
  content: string;
  createdAt?: Date;
}

// GET → list all notes or get one by id
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const note = await db.collection("notes").findOne({ _id: new ObjectId(id) });
      return NextResponse.json(note);
    }

    const notes = await db.collection("notes").find().sort({ createdAt: -1 }).toArray();
    return NextResponse.json(notes);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}

// POST → create new note
export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const body: Note = await req.json();

    const result = await db.collection("notes").insertOne({
      title: body.title,
      content: body.content,
      createdAt: new Date(),
    });

    return NextResponse.json({ _id: result.insertedId, ...body });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create note" }, { status: 500 });
  }
}

// PUT → update note
export async function PUT(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const body = await req.json();
    const { id, title, content } = body;

    if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

    await db
      .collection("notes")
      .updateOne({ _id: new ObjectId(id) }, { $set: { title, content } });

    return NextResponse.json({ message: "Updated successfully" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update note" }, { status: 500 });
  }
}

// DELETE → delete note
export async function DELETE(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const body = await req.json();
    const { id } = body;

    if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

    await db.collection("notes").deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete note" }, { status: 500 });
  }
}
