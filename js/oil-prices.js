/* ─── Oil Prices — Yahoo Finance (futuros en tiempo real) ─── */
(function () {
  const REFRESH   = 60000;           // actualizar cada 60 s
  const CACHE_KEY = 'ipp_oil_v2';
  const CACHE_TTL = 5 * 60 * 1000;  // caché 5 min entre páginas

  function set(id, val) {
    const el = document.getElementById(id);
    if (el && val != null) el.textContent = '$' + parseFloat(val).toFixed(2);
  }

  async function fetchPrice(symbol) {
    const url = 'https://query2.finance.yahoo.com/v8/finance/chart/'
                + encodeURIComponent(symbol)
                + '?interval=1m&range=1d';
    const r = await fetch(url);
    const d = await r.json();
    return d.chart.result[0].meta.regularMarketPrice;
  }

  async function update() {
    try {
      const [brent, wti] = await Promise.all([
        fetchPrice('BZ=F'),   // Brent Crude Futures
        fetchPrice('CL=F'),   // WTI Crude Futures
      ]);
      set('price-brent-val', brent);
      set('price-wti-val',   wti);
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ brent, wti, ts: Date.now() }));
    } catch (e) {
      console.warn('Oil prices unavailable:', e);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Mostrar caché inmediatamente si es reciente
    try {
      const c = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (c && Date.now() - c.ts < CACHE_TTL) {
        set('price-brent-val', c.brent);
        set('price-wti-val',   c.wti);
      }
    } catch (_) {}

    update();
    setInterval(update, REFRESH);
  });
})();
