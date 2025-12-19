import express, { Request, Response } from "express";
import { scrapeLatestData, scrapePokemonInTier, scrapeSprite } from "./dataScraper";
import { FullTierData, SpriteType } from "./dataStore";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));
const PORT = 3000;

app.get('/metagame-data/:gen/:tier', async (req: Request, res: Response) => {
  const gen: number = parseInt(req.params.gen);
  if (Number.isNaN(gen)) {
    return res.status(400).json({ error: "Invalid generation" });
  }

  const tier: string = req.params.tier as string;

  let data: FullTierData;
  try {
    data  = await scrapeLatestData(gen, tier);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({error: error.message});
  }
});

app.post('/tier-pokemon/:gen/:tier',
  express.json({ limit: "50mb" }),
  async (req: Request, res: Response) => {
  const {tierData} = req.body;
  const gen: number = parseInt(req.params.gen);
  const tier: string = req.params.tier as string;

  if (!gen || !tier || !tierData) {
    return res.status(400).json({ error: "Missing fields" });
  }

  let data: string[];
  try {
    data  = await scrapePokemonInTier(tierData, gen, tier);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({error: error.message});
  }
});

app.get('/sprite/:pokemon', async (req: Request, res: Response) => {
  const pokemon: string = req.params.pokemon;

  try {
    const sprite: {blob: Blob, type: SpriteType} = await scrapeSprite(pokemon);
    const type = sprite.type;
    const blob = sprite.blob;
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (type === SpriteType.GIF) {
      res.setHeader("Content-Type", "image/gif");
    } else if (type === SpriteType.PNG) {
      res.setHeader("Content-Type", "image/png");
    }
    res.status(200).send(buffer);
  } catch (error) {
    return res.status(502).json({error: error.message});
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
