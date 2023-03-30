import { SelectInfDehyari } from "../../../server/controllers/InfDehyari";
import CreateInfCron from "../../../server/cron/InfDehyari";

export default async function handler(req, res) {
  const select = await SelectInfDehyari({ id: 1 });
  if (select) return res.status(200).json({ result: "It has already been made" });
  CreateInfCron();
  res.status(200).json({ result: "Create data Succefuly" });
}
