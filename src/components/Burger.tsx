import React from 'react';
import { FOOD_SPRITES } from '@/constants';

interface BurgerProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
}

// This component is kept for compatibility but new food items should use the generic Food.tsx component.
const Burger: React.FC<Partial<BurgerProps>> = ({ position, size }) => {
    if (!position || !size) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundImage: `url(${FOOD_SPRITES.burger.sprite})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default Burger;