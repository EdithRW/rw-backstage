import { testOnePlugin } from './plugin';

describe('test-one', () => {
  it('should export plugin', () => {
    expect(testOnePlugin).toBeDefined();
  });
});
