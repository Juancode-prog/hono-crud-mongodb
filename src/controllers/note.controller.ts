import { Context } from "hono";
import {
  create,
  findAll,
  findOne,
  remove,
  updated,
} from "../services/note.service";
import { Note, NoteOption } from "../types/note.types";

export async function getNotes(c: Context) {
  const notes = await findAll();

  return c.json(notes, 200);
}

export async function createNotes(c: Context) {
  const { title, content } = await c.req.json<Note>();

  if (!title || !content) {
    return c.json({ msg: "Title or content is required" }, 400);
  }

  const noteSave = await create({ title, content });

  return c.json(noteSave, 201);
}

export async function getNote(c: Context) {
  const { id } = c.req.param();

  const noteFound = await findOne(id);

  if (!noteFound) {
    return c.json({ msg: "Note not found" }, 404);
  }

  return c.json(noteFound, 200);
}

export async function deleteNote(c: Context) {
  const { id } = c.req.param();

  const noteFound = await remove(id);

  if (!noteFound) {
    return c.json({ msg: "Note not found" }, 404);
  }

  return c.json(noteFound, 204);
}

export async function updatedNote(c: Context) {
  const { id } = c.req.param();
  try {
    const note = await c.req.json<NoteOption>();

    const noteFound = await updated({ id, note });

    if (!noteFound) {
      return c.json({ msg: "Note not found" }, 404);
    }

    return c.json(noteFound, 200);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return c.json({ msg: error.message }, 400);
    }
    throw new Error("Error updatting note");
  }
}
