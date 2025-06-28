
import dynamic from 'next/dynamic';
const Quiz = dynamic(() => import('../components/Quiz'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Welcome to MyGuide AFK Prep App</h1>
      <Quiz />
    </main>
  );
}
