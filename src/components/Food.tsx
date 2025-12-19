import React from 'react';
import { FOOD_SPRITES } from '@/constants';
import { FoodType } from '@/types';

interface FoodProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
  foodType: FoodType;
}

const Food: React.FC<Partial<FoodProps>> = ({ position, size, foodType = 'burger' }) => {
    if (!position || !size) return null;

  const { sprite } = FOOD_SPRITES[foodType];

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundImage: `url(${sprite})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default Food;