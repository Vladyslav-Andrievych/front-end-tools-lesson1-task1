import { createLogger } from '../logger.js';

it('Should add log to logs array and return array', () => {
  const logger = createLogger('user actions');
  logger.log('bought phone');

  expect(logger.getLogs()).toEqual(['log - user actions - bought phone']);
});

it('Should add error to logs array and return array', () => {
  const logger = createLogger('user actions');
  logger.error('wrong password');

  expect(logger.getLogs()).toEqual(['error - user actions - wrong password']);
});
