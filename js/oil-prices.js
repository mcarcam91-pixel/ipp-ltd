/* ─── Oil Prices Widget — Financial Modeling Prep API ─── */
(function() {
  const API_KEY = 'i5nGO377kYJewZPAUlajrIDgtmx6HxR5';
  const REFRESH = 60000; // 60 segundos

  const SYMBOLS = {
    BRENT: 'BCOUSD',
    WTI:   'WTIUSD'
  };

  async function fetchPrice(symbol) {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data[0] || null;
  }

  function formatChange(pct) {
    const sign = pct >= 0 ? '▲' : '▼';
    const cls  = pct >= 0 ? 'price-up' : 'price-down';
    return `<span class="${cls}">${sign} ${Math.abs(pct).toFixed(2)}%</span>`;
  }

  async function updatePrices() {
    try {
      const [brent, wti] = await Promise.all([
        fetchPrice(SYMBOLS.BRENT),
        fetchPrice(SYMBOLS.WTI)
      ]);

      if (brent) {
        document.getElementById('price-brent-val').textContent =
          '$' + brent.price.toFixed(2);
        document.getElementById('price-brent-chg').innerHTML =
          formatChange(brent.changesPercentage);
      }

      if (wti) {
        document.getElementById('price-wti-val').textContent =
          '$' + wti.price.toFixed(2);
        document.getElementById('price-wti-chg').innerHTML =
          formatChange(wti.changesPercentage);
      }

      const el = document.getElementById('price-timestamp');
      if (el) {
        const now = new Date();
        el.textContent = now.toLocaleTimeString([],
          { hour: '2-digit', minute: '2-digit' });
      }
    } catch(e) {
      console.warn('Oil prices unavailable:', e);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    updatePrices();
    setInterval(updatePrices, REFRESH);
  });
})();
