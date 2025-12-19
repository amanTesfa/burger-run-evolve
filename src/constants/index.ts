import runnerSlim from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f0a7b73c-9b18-450a-94c6-0b06a3da6485/runner-slim-de31obz-1766135434570.webp';
import runnerMedium from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f0a7b73c-9b18-450a-94c6-0b06a3da6485/runner-medium-ob36uxt-1766135441406.webp';
import runnerHeavy from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f0a7b73c-9b18-450a-94c6-0b06a3da6485/runner-heavy-izv1s2y-1766135447215.webp';
import burger from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f0a7b73c-9b18-450a-94c6-0b06a3da6485/burger-h2htu4b-1766135453268.webp';
import injera from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/injera-1716213798555.png';
import obstacle from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/obstacle-1716213803875.png';
import gameBackground from 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f0a7b73c-9b18-450a-94c6-0b06a3da6485/game-background-un2f44q-1766135460136.webp';

export const RUNNER_SPRITES: { [key: string]: string } = {
  slim: runnerSlim,
  medium: runnerMedium,
  heavy: runnerHeavy,
};

export const FOOD_SPRITES: { [key: string]: { sprite: string, points: number } } = {
    burger: { sprite: burger, points: 1 },
    injera: { sprite: injera, points: 3 },
};

export const OBSTACLE_SPRITE = obstacle;
export const GAME_BACKGROUND = gameBackground;

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;
export const RUNNER_START_X = 50;
export const RUNNER_START_Y = 400;
export const GROUND_Y = 500;
export const ITEM_WIDTH = 50;
export const ITEM_HEIGHT = 50;
export const OBSTACLE_WIDTH = 60;
export const OBSTACLE_HEIGHT = 120;
export const RUNNER_WIDTH = 100;
export const RUNNER_HEIGHT = 150;
export const GAME_SPEED = 5;

export const SCORE_THRESHOLD_MEDIUM = 10;
export const SCORE_THRESHOLD_HEAVY = 25;