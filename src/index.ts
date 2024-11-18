import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { timing } from "hono/timing";

import noteRouter from "./routes/note.routes";
import { getConnection } from "./libs/mongoose";

const app = new Hono();

getConnection();

// ? Middleware
app.use(logger());
app.use(prettyJSON());
app.use(timing());

app.route("/", noteRouter);

export default app;
