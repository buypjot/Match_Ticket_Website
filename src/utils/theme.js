export function updatePublicTheme(customer) {
  if (!customer?.theme_color) return;

  const hex = customer.theme_color;
  const root = document.documentElement;

  root.style.setProperty('--primary', hex);
  root.style.setProperty('--pb-primary', hex);
  root.style.setProperty('--primary-dark', adjustBrightness(hex, -20));
  root.style.setProperty('--primary-glow', `${hex}1a`);

  const rgb = hexToRgb(hex);
  if (rgb) {
    const rgbStr = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
    root.style.setProperty('--primary-rgb', rgbStr);
    root.style.setProperty('--pb-primary-rgb', rgbStr);
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function adjustBrightness(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const r = Math.max(0, Math.min(255, rgb.r + (rgb.r * percent) / 100));
  const g = Math.max(0, Math.min(255, rgb.g + (rgb.g * percent) / 100));
  const b = Math.max(0, Math.min(255, rgb.b + (rgb.b * percent) / 100));

  return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1)}`;
}
