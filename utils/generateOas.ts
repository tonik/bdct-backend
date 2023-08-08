const helper = require("fastify-cli/helper.js");
import fs from "fs";
import path from "path";

const generateOas = async () => {
  const argv = [path.join(__dirname, "..", "src", "app.ts")];
  const app = await helper.build(argv, {});
  const yaml = app.swagger({ yaml: true });

  fs.rmSync('oas', { recursive: true, force: true })
  fs.mkdirSync("oas");
  fs.writeFileSync("oas/swagger.yml", yaml);
};

generateOas();
