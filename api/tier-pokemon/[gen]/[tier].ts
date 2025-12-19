import { scrapePokemonInTier } from '../../_lib/dataScraper';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  const {gen, tier} = req.query;
  const {tierData} = req.body;

  const genNum = parseInt(gen as string);

  if (!genNum || !tier || !tierData) {
    return res.status(400).json({error: 'Missing fields'});
  }

  try {
    const data = await scrapePokemonInTier(
      tierData, genNum, tier as string
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
}
