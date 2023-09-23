import { useState, useEffect } from "react";

/**
 * The function creates a logging utility with customizable logging levels and options for saving
 * configurations.
 * @param loggingType - A string that represents the type of logging being used (e.g. "server",
 * "client", "database").
 * @param [level] - The logging level to be used for the logger. It can be one of "info", "log",
 * "warn", or "error". If no level is provided, it will try to retrieve the level from the localStorage
 * using the loggingType as the key.
 * @param [options] - An optional object that can have a "save" property set to a boolean value. If
 * "save" is true, the logging level for the given logging type will be saved to local storage. If
 * "save" is not provided or is false, the logging level will not be saved.
 * @returns An object with a property `logger` that contains various logging methods such as `info`,
 * `log`, `warn`, `error`, and all other console functions
 */
const useLogger = (
  loggingType: string,
  level: string | undefined = undefined
) => {
  const [loggingLevel, setLoggingLevel] = useState<string | undefined>(level);
  const loggingPrefix = "[" + loggingType + "]";

  const loadLoggingLevel = () => {
      const config = JSON.parse(localStorage.getItem("logging") ?? "{}");
      if (config && config[loggingType]) {
        setLoggingLevel(config[loggingType]);
      } 
  }

  if (!loggingLevel) {
    loadLoggingLevel();
  }

  useEffect(() => {
    window.addEventListener('storage',loadLoggingLevel);
    return () => {
      window.removeEventListener('storage',loadLoggingLevel);
    }
  },[])


  function debug(...args: any[]) {
    if (loggingLevel === "info" || loggingLevel === "debug" || loggingLevel === "log") {
      console.log(loggingPrefix, "[debug]", ...args);
    }
  }
  function info(...args: any[]) {
    if (loggingLevel === "info" || loggingLevel === "debug" || loggingLevel === "log") {
      console.log(loggingPrefix, "[info]", ...args);
    }
  }
  function log(...args: any[]) {
    if (loggingLevel === "log" || loggingLevel === "debug" || loggingLevel === "info") {
      console.log(loggingPrefix, ...args);
    }
  }
  function warn(...args: any[]) {
    if (
      loggingLevel === "warn" ||
      loggingLevel === "log" || 
      loggingLevel === "debug" ||      
      loggingLevel === "info"
    ) {
      console.warn(loggingPrefix, ...args);
    }
  }
  function error(...args: any[]) {
    if (
      loggingLevel === "error" ||
      loggingLevel === "warn" ||
      loggingLevel === "log" || 
      loggingLevel === "debug"  ||
      loggingLevel === "info"
    ) {
      console.error(loggingPrefix, ...args);
    }
  }

  const logger: any = {};
  logger.debug = debug;
  logger.info = info;
  logger.log = log;
  logger.warn = warn;
  logger.error = error;
  logger.assert = console.assert;
  logger.clear = console.clear;
  logger.count = console.count;
  logger.countReset = console.countReset;
  logger.debug = console.debug;
  logger.dir = console.dir;
  logger.dirxml = console.dirxml;
  logger.group = console.group;
  logger.groupCollapsed = console.groupCollapsed;
  logger.groupEnd = console.groupEnd;
  logger.table = console.table;
  logger.time = console.time;
  logger.timeEnd = console.timeEnd;
  logger.timeLog = console.timeLog;
  logger.timeStamp = console.timeStamp;
  logger.trace = console.trace;
  logger.timeStamp = console.timeStamp;

  return { logger, log, warn, error };
};

export default useLogger;
