import { ILogObject, Logger } from "tslog";
import { appendFileSync } from "fs";

function logToTransportError(logObject: ILogObject) {
    appendFileSync("./logs/error.log", dataFormat(logObject) + "\n");
};
function logToTransportInfo(logObject: ILogObject) {
    appendFileSync("./logs/info.log", dataFormat(logObject) + "\n");
};
function logToTransportDebug(logObject: ILogObject) {
    appendFileSync("./logs/debug.log", dataFormat(logObject) + "\n");
};

function dataFormat(logObject: ILogObject): string {
    return '[date: ' + logObject.date + '] -- ' +
        'logLevel: ' + logObject.logLevel + ' -- ' +
        'message: ' + logObject.argumentsArray + ' -- ' +
        'fileName: ' + logObject.fileName + ' -- ' +
        'lineNumber: ' + logObject.lineNumber;
};

export const logger: Logger = new Logger();
logger.attachTransport(
    {
        silly: logToTransportInfo,
        debug: logToTransportDebug,
        trace: logToTransportInfo,
        info: logToTransportInfo,
        warn: logToTransportInfo,
        error: logToTransportError,
        fatal: logToTransportError,
    },
    "debug"
);