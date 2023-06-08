import orderByProps, { obj } from '../index';

test('check keys', () => {
  const a = orderByProps(obj, ['name', 'level']);
  expect(a).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }]);
});
