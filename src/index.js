#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const logUpdate = require("log-update");
const { saveCursor, clearTerminal } = require("./terminal");
const frames = require("./frames");

saveCursor();
clearTerminal();

let i = 0;

setInterval(() => {
  const frame = frames[i];
  i = (i + 1) % frames.length;

  logUpdate(`${frame}`);
}, 60);

process.on("SIGINT", () => {
  clearTerminal();
  process.exit();
});
