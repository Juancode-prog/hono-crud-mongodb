import Note from "../models/note.model";
import { NoteOption } from "../types/note.types";

export async function findAll() {
  try {
    const notes = await Note.find();

    return notes;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
    throw new Error("Error gettings notes");
  }
}

export async function create({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  try {
    const newNote = new Note({ title, content });

    const noteSave = await newNote.save();

    return noteSave;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    throw new Error("Error createNote");
  }
}

export async function findOne(id: string) {
  try {
    const noteFound = await Note.findById(id);

    return noteFound;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
    throw new Error("Error getting note");
  }
}

export async function remove(id: string) {
  try {
    const noteFound = await Note.findByIdAndDelete(id);

    return noteFound;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
    throw new Error("Error deletting note");
  }
}

export async function updated({ id, note }: { id: string; note: NoteOption }) {
  try {
    const noteFound = await Note.findByIdAndUpdate(id, note, {
      new: true,
    });

    return noteFound;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    throw new Error("Error updating note");
  }
}
