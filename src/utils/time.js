export const pad = (n) => String(n).padStart(2, '0');

export const formatTime = (ms) => {
  const safeMs = Math.max(0, ms || 0);
  const totalSec = Math.floor(safeMs / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const cs = Math.floor((safeMs % 1000) / 10);

  return { h, m, s, cs };
};

export const getInputMs = (h, m, s) => (
  (parseInt(h || 0, 10) * 3600 + parseInt(m || 0, 10) * 60 + parseInt(s || 0, 10)) * 1000
);

export const toTwoDigitBounded = (value, max) => {
  const parsed = parseInt(value, 10);
  const bounded = Math.min(max, Math.max(0, Number.isNaN(parsed) ? 0 : parsed));
  return String(bounded).padStart(2, '0');
};
