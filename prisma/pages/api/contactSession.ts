import type { NextApiRequest, NextApiResponse } from "next";
import { createContactSession } from "../../services/contactSession";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const id = await createContactSession(req.body);
      res.status(200).json({ id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create contact session" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
