const fs = require("fs-extra");
const path = require("path");
const currentDir = process.cwd();

const file = path.join(currentDir, "android/app/build.gradle");

async function increaseVersionCode() {
  try {
    const data = await fs.readFile(file, "utf-8");

    const newData = data.replace(/versionCode (\d+)/, (match, p1) => {
      return `versionCode ${parseInt(p1, 10) + 1}`;
    });

    await fs.writeFile(file, newData, "utf-8");
    console.log("Increased Android 'versionCode' by 1");
  } catch (err) {
    console.error(err);
  }
}

increaseVersionCode();
