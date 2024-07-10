import { checkHealth } from "../health";

test('health more than 50', () => {
  expect(checkHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health from 15 to 50', () => {
  expect(checkHealth({ name: 'Воин', health: 30 })).toBe('wounded');
});

test('health less than 15', () => {
  expect(checkHealth({ name: 'Разбойник', health: 10 })).toBe('critical');
});