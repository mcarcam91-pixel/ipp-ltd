/* ─── Oil Prices — Yahoo Finance (futuros en tiempo real) ─── */
(function () {
  const REFRESH   = 60000;           // actualizar cada 60 s
  const CACHE_KEY = 'ipp_oil_v2';
  const CACHE_TTL = 5 * 60 * 1000;  // caché 5 min entre páginas

  function set(id, val) {
    const el = document.getElementById(id);
    if (el && val != null) el.textContent = '$' + parseFloat(val).toFixed(2);
  }

  async function update() {
    try {
      const res  = await fetch('/api/oil-prices');
      const data = await res.json();
      if (data.brent && data.wti) {
        set('price-brent-val', data.brent);
        set('price-wti-val',   data.wti);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ brent: data.brent, wti: data.wti, ts: Date.now() }));
      }
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
