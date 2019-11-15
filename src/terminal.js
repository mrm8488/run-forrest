const saveCursor = () => console.log("\033[s");
const clearTerminal = () => console.log("\033[2J");

module.exports = { saveCursor, clearTerminal };
