import Quiz from '../components/Quiz';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to MyGuide AFK Prep App</h1>
      <ThemeToggle />
      <Quiz />
    </main>
  );
}