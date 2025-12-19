import { scrapeSprite } from '../../src/dataScraper';
import { SpriteType } from '../../src/dataStore';

export default async function handler(req: any, res: any) {
  const {pokemon} = req.query;

  try {
    const sprite = await scrapeSprite(pokemon as string);
    const arrayBuffer = await sprite.blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (sprite.type === SpriteType.GIF) {
      res.setHeader('Content-Type', 'image/gif');
    } else {
      res.setHeader('Content-Type', 'image/png');
    }

    res.status(200).send(buffer);
  } catch (error) {
    res.status(502).json({error: error.message});
  }
}
