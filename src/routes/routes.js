import express from "express";

import sendMessageService from "../services/sendMessageService.js";

const routes = express();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello! This is our home page" });
});

routes.post("/send", async (req, res) => {
  const { recipientTelephone } = req.body;

  const result = await sendMessageService(recipientTelephone);

  return res.json(result);
});

export default routes;
