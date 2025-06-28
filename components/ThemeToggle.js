import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.background = dark ? '#111' : '#fff';
    document.body.style.color = dark ? '#eee' : '#000';
  }, [dark]);

  return (
    <label style={{ float: 'right' }}>
      <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
      {dark ? '🌙 Dark' : '☀️ Light'}
    </label>
  );
}