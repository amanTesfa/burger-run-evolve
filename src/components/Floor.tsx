import React from 'react';
import { GAME_WIDTH, GROUND_Y } from '@/constants';

const Floor = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: GROUND_Y,
        width: GAME_WIDTH,
        height: 5,
        backgroundColor: 'transparent', // The background image has the ground
      }}
    />
  );
};

export default Floor;