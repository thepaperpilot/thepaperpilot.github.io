const fs = require("fs");

if (fs.existsSync("./site/article")) {
    console.log("Cleaning old articles...")
    fs.rmSync("./site/article", { recursive: true });
}
if (fs.existsSync("./site/repost")) {
    console.log("Cleaning old reposts...")
    fs.rmSync("./site/repost", { recursive: true });
}
if (fs.existsSync("./site/bookmark")) {
    console.log("Cleaning old bookmarks...")
    fs.rmSync("./site/bookmark", { recursive: true });
}
if (fs.existsSync("./site/favorite")) {
    console.log("Cleaning old favorites...")
    fs.rmSync("./site/favorite", { recursive: true });
}
if (fs.existsSync("./site/reply")) {
    console.log("Cleaning old replies...")
    fs.rmSync("./site/reply", { recursive: true });
}
