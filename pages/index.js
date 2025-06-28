import Quiz from '../components/Quiz';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>MyGuide AFK Prep</h1>
      <ThemeToggle />
      <Quiz />
    </main>
  );
}