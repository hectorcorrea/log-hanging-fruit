var logger = require('./logger').logger;
var consoleLogger = require('./consoleLogger');
var fileLogger = require('./fileLogger');
var options = {filePath: __dirname + '/' };

// Initialize the logger's options 
// (basically we just set a path for the fileLogger)
logger.setup(options);


// Wire up both loggers to be notified when something needs to be logged.
logger.on('log', consoleLogger.log);
logger.on('log', fileLogger.log)


// Log a few things with different levels
logger.debug('hello debug world');
logger.info('hello info world');
logger.warn('hello warning world');
logger.error('hello error world');

console.log("\r\n\r\nTest is done.");
console.log("There should be a file (named with today's date) with these log entries too");
