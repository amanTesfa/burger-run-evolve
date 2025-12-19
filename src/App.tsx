import React, { useState, useMemo, useCallback } from 'react';
import { GameEngine } from 'react-game-engine';
import initialEntities from '@/entities';
import { GameLoop } from '@/systems';
import { GAME_WIDTH, GAME_HEIGHT, GAME_BACKGROUND } from '@/constants';

const App = () => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'running' | 'gameOver'>('running');
  const [gameKey, setGameKey] = useState(0);

  const entities = useMemo(() => initialEntities(score), [gameKey]);

  const handleEvent = useCallback((e: any) => {
    if (e.type === 'score') {
      setScore((prevScore) => prevScore + e.points);
    } else if (e.type === 'game-over') {
      setGameState('gameOver');
    }
  }, []);

  const restartGame = () => {
    setScore(0);
    setGameState('running');
    setGameKey(prevKey => prevKey + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 p-4 font-mono">
        <h1 className='text-white font-bold text-5xl mb-4'>Injera Dash</h1>
        <div className="w-full max-w-screen-lg aspect-video flex justify-center items-center bg-cover bg-center rounded-lg shadow-2xl relative border-4 border-white/50" style={{ backgroundImage: `url(${GAME_BACKGROUND})` }}>
          <div className="relative">
              <GameEngine
                key={gameKey}
                running={gameState === 'running'}
                className="bg-transparent"
                style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
                systems={[GameLoop]}
                entities={entities}
                onEvent={handleEvent}
              >
                <div className="absolute top-5 left-5 text-white text-3xl font-bold bg-black/50 px-4 py-1 rounded">
                    Score: {score}
                </div>
              </GameEngine>
            {gameState === 'gameOver' && (
              <div style={{ width: GAME_WIDTH, height: GAME_HEIGHT }} className='absolute top-0 left-0 flex flex-col justify-center items-center bg-black/70 rounded-lg'>
                <h2 className='text-white font-bold text-6xl mb-4'>Game Over</h2>
                <p className='text-white text-3xl mb-8'>Your Score: {score}</p>
                <button onClick={restartGame} className='px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-lg text-2xl hover:bg-yellow-400 transition-colors shadow-lg'>
                  Play Again
                </button>
              </div>
            )}
            <div className="absolute -bottom-12 w-full text-center text-white text-lg">
              {gameState === 'running' ? 'Tap or Click to Jump!' : 'Great run!'}
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;