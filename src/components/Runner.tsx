import React from 'react';
import { RUNNER_SPRITES } from '@/constants';
import { CharacterStage } from '@/types';

// The GameEngine will pass the entity's state as props to its renderer
interface RunnerProps {
  stage: CharacterStage;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const Runner: React.FC<Partial<RunnerProps>> = ({ stage = 'slim', position, size }) => {
  // Don't render if the core properties aren't provided by the engine yet
  if (!position || !size) return null; 

  const runnerSprite = RUNNER_SPRITES[stage];

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundImage: `url(${runnerSprite})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default Runner;