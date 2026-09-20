import { stops } from '@/data/stops';

describe('route data', () => {
  it('contains the full researched journey order', () => {
    expect(stops.map((s) => s.name)).toEqual([
      'Pretoria', 'Johannesburg', 'Kimberley', 'De Aar', 'Hutchinson / Merriman',
      'Worcester', 'Wellington', 'Paarl', 'Bellville', 'Cape Town'
    ]);
  });

  it('has a story and fun fact for every stop', () => {
    expect(stops.every((s) => s.story.length > 20 && s.fun_fact.length > 10)).toBe(true);
  });
});
