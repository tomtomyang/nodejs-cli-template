import { runTomtom } from './helper/run-command';
import { spyConsoleMethods } from './helper/spy-console';

describe('add command', () => {
  const consoleSpy = spyConsoleMethods();

  test('1 + 1 = 2', async () => {
    await runTomtom('add 1 1');

    expect(consoleSpy.log).toBeCalledWith('2');
  });
});
