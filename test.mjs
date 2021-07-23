import pino from 'pino';

const logger = pino({ level: 'trace' });

logger.trace('Trace log');
logger.debug('Debug log');
logger.info('Info log');
logger.warn('Warn log');
logger.error('Error log');

console.log('Normal console.log');
console.warn('Normal console.warn');
console.error('Normal console.error');
