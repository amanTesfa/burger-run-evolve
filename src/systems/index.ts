import {
    GAME_WIDTH,
    GAME_SPEED,
    GROUND_Y,
    RUNNER_HEIGHT,
    ITEM_WIDTH,
    FOOD_SPRITES,
    SCORE_THRESHOLD_MEDIUM,
    SCORE_THRESHOLD_HEAVY,
    OBSTACLE_WIDTH
} from "@/constants";
import { CharacterStage } from "@/types";

const isColliding = (box1: any, box2: any) => {
    return (
        box1.x < box2.x + box2.width &&
        box1.x + box1.width > box2.x &&
        box1.y < box2.y + box2.height &&
        box1.y + box1.height > box2.y
    );
};

const GameLoop = (entities: any, { touches, time, dispatch }: any) => {
    if (!entities.runner) return entities;
    const runner = entities.runner;

    // --- Game Over Check ---
    if (runner.gameOver) {
        return entities;
    }

    // --- Physics ---
    runner.velocity.y += 1.2; // Gravity
    runner.position.y += runner.velocity.y;

    // Ground collision
    if (runner.position.y > GROUND_Y - RUNNER_HEIGHT) {
        runner.position.y = GROUND_Y - RUNNER_HEIGHT;
        runner.velocity.y = 0;
        runner.onGround = true;
    }

    // --- Controls ---
    const startTouches = touches.filter((t: any) => t.type === "start");
    if (startTouches.length > 0 && runner.onGround) {
        runner.velocity.y = -20; // Jump strength
        runner.onGround = false;
    }

    const runnerBox = { x: runner.position.x, y: runner.position.y, width: runner.size.width - 20, height: runner.size.height - 20 };

    // --- Game Logic ---
    for (const key in entities) {
        if (key.startsWith('food')) {
            const food = entities[key];
            food.position.x -= GAME_SPEED;

            const foodBox = { x: food.position.x, y: food.position.y, width: food.size.width, height: food.size.height };

            if (isColliding(runnerBox, foodBox)) {
                const { points } = FOOD_SPRITES[food.foodType];
                runner.score += points;
                dispatch({ type: 'score', points });
                food.position.x = GAME_WIDTH + Math.random() * 500;
                food.position.y = GROUND_Y - food.size.height - Math.random() * 150;
            }

            if (food.position.x < -ITEM_WIDTH) {
                food.position.x = GAME_WIDTH + Math.random() * 500;
                food.position.y = GROUND_Y - food.size.height - Math.random() * 150;
            }
        } else if (key.startsWith('obstacle')) {
            const obstacle = entities[key];
            obstacle.position.x -= GAME_SPEED;

            const obstacleBox = { x: obstacle.position.x, y: obstacle.position.y, width: obstacle.size.width - 20, height: obstacle.size.height - 20 };

            if (isColliding(runnerBox, obstacleBox)) {
                dispatch({ type: 'game-over' });
                runner.gameOver = true;
            }

            if (obstacle.position.x < -OBSTACLE_WIDTH) {
                obstacle.position.x = GAME_WIDTH + Math.random() * 1000 + 400;
            }
        }
    }

    // --- Visual Progression ---
    let newStage: CharacterStage = 'slim';
    if (runner.score >= SCORE_THRESHOLD_HEAVY) {
        newStage = 'heavy';
    } else if (runner.score >= SCORE_THRESHOLD_MEDIUM) {
        newStage = 'medium';
    }

    if (runner.stage !== newStage) {
        runner.stage = newStage;
    }

    return entities;
};

export { GameLoop };