import React from 'react';
import { OBSTACLE_SPRITE } from '@/constants';

interface ObstacleProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const Obstacle: React.FC<Partial<ObstacleProps>> = ({ position, size }) => {
    if (!position || !size) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundImage: `url(${OBSTACLE_SPRITE})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default Obstacle;