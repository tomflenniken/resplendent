import { BLACK, BLUE, GREEN, RED, WHITE } from './colorNames';

let K = BLACK, B = BLUE, G = GREEN, R = RED, W = WHITE;

export const NOBLE_DEFINITIONS_BY_ID = {
  noble0: { id: 'noble0', requirement: {[K]: 0, [W]: 0, [R]: 4, [B]: 0, [G]: 4 }, points: 3 },
  noble1: { id: 'noble1', requirement: {[K]: 3, [W]: 3, [R]: 3, [B]: 0, [G]: 0 }, points: 3 },
  noble2: { id: 'noble2', requirement: {[K]: 0, [W]: 4, [R]: 0, [B]: 4, [G]: 0 }, points: 3 },
  noble3: { id: 'noble3', requirement: {[K]: 4, [W]: 4, [R]: 0, [B]: 0, [G]: 0 }, points: 3 },
  noble4: { id: 'noble4', requirement: {[K]: 0, [W]: 0, [R]: 0, [B]: 4, [G]: 4 }, points: 3 },
  noble5: { id: 'noble5', requirement: {[K]: 0, [W]: 0, [R]: 3, [B]: 3, [G]: 3 }, points: 3 },
  noble6: { id: 'noble6', requirement: {[K]: 0, [W]: 3, [R]: 0, [B]: 3, [G]: 3 }, points: 3 },
  noble7: { id: 'noble7', requirement: {[K]: 4, [W]: 0, [R]: 4, [B]: 0, [G]: 0 }, points: 3 },
  noble8: { id: 'noble8', requirement: {[K]: 3, [W]: 3, [R]: 0, [B]: 3, [G]: 0 }, points: 3 },
  noble9: { id: 'noble9', requirement: {[K]: 3, [W]: 0, [R]: 3, [B]: 0, [G]: 3 }, points: 3 },
};

export const NOBLE_DEFINITIONS = Object.values(NOBLE_DEFINITIONS_BY_ID);
