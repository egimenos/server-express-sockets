import { Router, Request, Response } from "express";
import Server from "../classes/server";

const router = Router();

router.get("/messages", (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: "Everything OK",
  });
});

router.post("/messages", (req: Request, res: Response) => {
  const content = req.body.content;
  const from = req.body.from;
  const server = Server.instance;
  const payload = {
    from: from,
    content: content,
  };

  server.io.emit("new-message", payload);
  res.json({
    ok: true,
    content,
    from,
  });
});

router.post("/messages/:id", (req: Request, res: Response) => {
  const content = req.body.content;
  const from = req.body.from;
  const id = req.params.id;

  const payload = {
    from: from,
    content: content,
  };

  const server = Server.instance;

  server.io.in(id).emit("private-message", payload);

  res.json({
    ok: true,
    content,
    from,
    id,
  });
});

export default router;
