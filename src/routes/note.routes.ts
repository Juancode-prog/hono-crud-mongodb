import { Hono } from "hono";
import {
  createNotes,
  deleteNote,
  getNote,
  getNotes,
  updatedNote,
} from "../controllers/note.controller";

const noteRouter = new Hono();

noteRouter.get("/note", getNotes);

noteRouter.post("/note", createNotes);

noteRouter.get("/note/:id", getNote);

noteRouter.delete("/note/:id", deleteNote);

noteRouter.put("/note/:id", updatedNote);

export default noteRouter;
