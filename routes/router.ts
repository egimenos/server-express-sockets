import { Router, Request, Response } from "express";

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

  res.json({
    ok: true,
    content,
    from,
    id,
  });
});

export default router;
