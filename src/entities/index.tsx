import React from 'react';
import Runner from '@/components/Runner';
import Food from '@/components/Food';
import Obstacle from '@/components/Obstacle';
import Floor from '@/components/Floor';
import { 
    RUNNER_START_X, 
    RUNNER_START_Y, 
    RUNNER_WIDTH, 
    RUNNER_HEIGHT, 
    GAME_WIDTH, 
    GROUND_Y, 
    ITEM_HEIGHT, 
    ITEM_WIDTH, 
    OBSTACLE_HEIGHT, 
    OBSTACLE_WIDTH 
} from '@/constants';

const initialEntities = (score: number = 0) => ({
  runner: {
    position: { x: RUNNER_START_X, y: RUNNER_START_Y },
    size: { width: RUNNER_WIDTH, height: RUNNER_HEIGHT },
    velocity: { x: 0, y: 0 },
    onGround: false,
    stage: 'slim',
    score: score,
    gameOver: false,
    renderer: <Runner />,
  },
  floor: {
    position: { x: 0, y: GROUND_Y },
    size: { width: GAME_WIDTH, height: 20 },
    renderer: <Floor />,
  },
  food1: {
    position: { x: GAME_WIDTH + 100, y: GROUND_Y - ITEM_HEIGHT - Math.random() * 150 },
    size: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
    foodType: 'burger',
    renderer: <Food />,
  },
  food2: {
    position: { x: GAME_WIDTH + 500, y: GROUND_Y - ITEM_HEIGHT - Math.random() * 150 },
    size: { width: ITEM_WIDTH + 10, height: ITEM_HEIGHT + 10 },
    foodType: 'injera',
    renderer: <Food />,
  },
  obstacle1: {
    position: { x: GAME_WIDTH + 600, y: GROUND_Y - OBSTACLE_HEIGHT },
    size: { width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT },
    renderer: <Obstacle />,
  },
   obstacle2: {
    position: { x: GAME_WIDTH + 1200, y: GROUND_Y - OBSTACLE_HEIGHT },
    size: { width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT },
    renderer: <Obstacle />,
  },
});

export default initialEntities;