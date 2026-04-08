/* ─── Oil Prices Widget — Alpha Vantage API ─── */
(function() {
  const API_KEY = 'YDCEXMEYW9OAUUFW';
  const REFRESH = 60000;

  async function updatePrices() {
    try {
      const brentRes = await fetch(`https://www.alphavantage.co/query?function=BRENT&interval=daily&apikey=${API_KEY}`).then(r => r.json());
      await new Promise(r => setTimeout(r, 1200));
      const wtiRes = await fetch(`https://www.alphavantage.co/query?function=WTI&interval=daily&apikey=${API_KEY}`).then(r => r.json());

      const brentData = brentRes.data;
      const wtiData = wtiRes.data;

      if (brentData && brentData.length >= 2) {
        const today = parseFloat(brentData[0].value);
        const yesterday = parseFloat(brentData[1].value);
        const pct = ((today - yesterday) / yesterday) * 100;

        document.getElementById('price-brent-val').textContent =
          '$' + today.toFixed(2);
        document.getElementById('price-brent-chg').innerHTML =
          pct >= 0
            ? `<span class="price-up">▲ ${pct.toFixed(2)}%</span>`
            : `<span class="price-down">▼ ${Math.abs(pct).toFixed(2)}%</span>`;
      }

      if (wtiData && wtiData.length >= 2) {
        const today = parseFloat(wtiData[0].value);
        const yesterday = parseFloat(wtiData[1].value);
        const pct = ((today - yesterday) / yesterday) * 100;

        document.getElementById('price-wti-val').textContent =
          '$' + today.toFixed(2);
        document.getElementById('price-wti-chg').innerHTML =
          pct >= 0
            ? `<span class="price-up">▲ ${pct.toFixed(2)}%</span>`
            : `<span class="price-down">▼ ${Math.abs(pct).toFixed(2)}%</span>`;
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
