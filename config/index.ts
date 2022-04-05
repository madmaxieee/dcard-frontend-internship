// @ts-ignore
const yaml = require("js-yaml");
const fs = require("fs");

const config = yaml.load(fs.readFileSync("./config/config.yaml", "utf-8"));

module.exports = config;
