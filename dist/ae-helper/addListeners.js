"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codeAnalytics_1 = require("./protos/codeAnalytics");
const ProgressRateMessage = codeAnalytics_1.merico.analysis.gateway.ProgressRateMessage;
const AnalysisMessage = codeAnalytics_1.merico.analysis.gateway.AnalysisMessage;
function addListeners(conn, listeners) {
    return Promise.all([
        listenToAnalysis(conn, listeners),
        listenToProgressChange(conn, listeners),
    ]);
}
exports.default = addListeners;
async function listenToAnalysis(conn, listeners) {
    const EXCHANGE = 'ca.analysis';
    const QUEUE = '';
    const ROUTE_KEY = 'ca.analysis.result.all';
    const chan = await conn.createChannel();
    await chan.assertExchange(EXCHANGE, 'topic', { durable: true });
    await chan.assertQueue(QUEUE, { exclusive: true });
    await chan.bindQueue(QUEUE, EXCHANGE, ROUTE_KEY);
    await chan.prefetch(1);
    await chan.consume(QUEUE, async ({ content }) => {
        const message = AnalysisMessage.decode(content);
        listeners.onAnalysisComplete.forEach(fn => fn(message));
    }, { noAck: true });
}
async function listenToProgressChange(conn, listeners) {
    const EXCHANGE = 'ca.analysis';
    const QUEUE = '';
    const ROUTE_KEY = 'ca.analysis.progress.*';
    const chan = await conn.createChannel();
    await chan.assertExchange(EXCHANGE, 'topic', { durable: true });
    await chan.assertQueue(QUEUE, { exclusive: true });
    await chan.bindQueue(QUEUE, EXCHANGE, ROUTE_KEY);
    await chan.consume(QUEUE, async ({ content }) => {
        const message = ProgressRateMessage.decode(content);
        listeners.onProgressChange.forEach(fn => fn(message));
    }, { noAck: true });
}
