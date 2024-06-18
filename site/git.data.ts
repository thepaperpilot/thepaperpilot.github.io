const fs = require("fs");
const path = require("path");

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

export default {
  watch: ['site/garden/**/*'],
  async load(files: string[]): Record<string, string> {
    const ret: Record<string, string> = {};
    await Promise.all(files.map(e => new Promise<void>(async (resolve) => {
        const firstCommit = (await new Promise(async (resolve, reject) => {
            exec(`git log -n 1 --diff-filter=A --format="<a href='https://code.incremental.social/thepaperpilot/pages/commit/%H' title='%ad'><time class='dt-published' datetime='%ad'>%as</time></a>" -- ${e}`)
            .then(output => resolve(output.stdout))
            .catch(err => console.warn(`Error calculating first commit for ${e}:\n${err}`) || reject());
        })) ?? "";
        const lastCommit = (await new Promise(async (resolve, reject) => {
            exec(`git log -n 1 --diff-filter=M --format="<a href='https://code.incremental.social/thepaperpilot/pages/commit/%H' title='%ad'><time class='dt-updated' datetime='%ad'>%as</time></a>" -- ${e}`)
            .then(output => resolve(output.stdout))
            .catch(err => console.warn(`Error calculating first commit for ${e}:\n${err}`) || reject());
        })) ?? "";
        ret[e] = `Planted ${firstCommit}.${lastCommit ? ` Last tended to ${lastCommit}.` : ''}`;
        resolve();
    })));
    return ret;
  }
};
