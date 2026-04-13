// Vercel Serverless Function — proxy para Yahoo Finance
// Evita CORS: el browser llama a /api/oil-prices (mismo dominio)
// y este endpoint hace el fetch server-to-server a Yahoo Finance

export default async function handler(req, res) {
  try {
    const [brentRes, wtiRes] = await Promise.all([
      fetch('https://query2.finance.yahoo.com/v8/finance/chart/BZ%3DF?interval=1m&range=1d'),
      fetch('https://query2.finance.yahoo.com/v8/finance/chart/CL%3DF?interval=1m&range=1d'),
    ]);

    const brentData = await brentRes.json();
    const wtiData   = await wtiRes.json();

    const brent = brentData.chart.result[0].meta.regularMarketPrice;
    const wti   = wtiData.chart.result[0].meta.regularMarketPrice;

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ brent, wti });
  } catch (e) {
    res.status(500).json({ error: 'Prices unavailable' });
  }
}
