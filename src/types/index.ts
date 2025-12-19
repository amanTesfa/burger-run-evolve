export type CharacterStage = 'slim' | 'medium' | 'heavy';

export type FoodType = 'burger' | 'injera';

export interface GameEntity {
  position: { x: number; y: number };
  size: { width: number; height: number };
  renderer: JSX.Element;
}
