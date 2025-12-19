import { scrapeLatestData } from '../../_lib/dataScraper.js';
import { FullTierData } from '../../_lib/dataStore.js';

export default async function handler(req: any, res: any) {
  const {gen, tier} = req.query;

  const genNum = parseInt(gen as string);
  if (Number.isNaN(genNum)) {
    return res.status(400).json({error: 'Invalid generation'});
  }

  try {
    const data: FullTierData = await scrapeLatestData(genNum, tier as string);
    res.status(200).json(data);
  } catch (error) {
    res.status(502).json({error: error.message});
  }
}
