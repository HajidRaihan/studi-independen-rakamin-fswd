const fs = require("fs");
const write = require("./helper/write");
const read = require("./helper/read");
const data = "New File Content";

write.writeModule("hasillll.txt", data);
read.readModule("hasil.txt");
