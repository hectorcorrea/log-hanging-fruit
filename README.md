log-hanging-fruit
=================

The simplest logger that could possibly work.

This logger supports logging to multiple destinations. It comes with two loggers built-in that can log to the console or to a text file.

There are 4 functions that can be used to log, each of them maps to the severity of the message being logged: debug, info, warn, or error. See example below.

The built-in loggers don't include any advanced features like color logging (to the console) or rolling files after a size has been reached. 
This logger is inspired in a way from log4net in the sense that it supports multiple loggers (called appenders in log4net lingo) and supports multiple levels but this logger is not nearly as battle tested as log4net or any of the other famous node.js loggers like winston.



sample of use
=============

  // Require the logger an initialize it
  var logger = require('./logger').logger;
  var consoleAppender = require('./consoleAppender');
  var fileAppender = require('./fileAppender');
  var options = {filePath: __dirname + '/' };
  logger.setup(options);

  // Wire up both appender (console and text file) to be
  // notified when something needs to be logged.
  logger.on('log', consoleAppender.log);
  logger.on('log', fileAppender.log);

  // Log a few things with different levels
  logger.debug('hello debug world');
  logger.info('hello info world');
  logger.warn('hello warning world');
  logger.error('hello error world');


