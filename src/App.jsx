import CountdownTimer from './CountdownTimer';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4] blur-sm -z-10"
        style={{ backgroundImage: `url('/gta-bg.jpg')` }}
      ></div>

      <div className="text-center">
        <h1 className="text-6xl font-gta text-gtaPink mb-6 drop-shadow-lg animate-pulse">
          Grand Theft Auto VI
        </h1>
        <CountdownTimer />
        <p className="mt-8 text-gray-300 text-lg">
          Launching May 26, 2026 🌴
        </p>
      </div>
    </div>
  );
}

export default App;
