const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

export default {
  watch: ['site/garden/**/*', 'site/now/**/*'],
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

    // Map pages just like build_garden does
    ret['site/guide-to-incrementals/index.md'] = ret['site/garden/guide-to-incrementals/index.md'];
    ret['site/guide-to-incrementals/design/criticism/index.md'] = ret['site/garden/guide-to-incrementals/navigating-criticism/index.md'];
    ret['site/guide-to-incrementals/ludology/appeal-developers/index.md'] = ret['site/garden/guide-to-incrementals/appeal-to-developers/index.md'];
    ret['site/guide-to-incrementals/ludology/appeal-gamers/index.md'] = ret['site/garden/guide-to-incrementals/appeal-to-players/index.md'];
    ret['site/guide-to-incrementals/ludology/content/index.md'] = ret['site/garden/guide-to-incrementals/what-is-content/index.md'];
    ret['site/guide-to-incrementals/ludology/definition/index.md'] = ret['site/garden/guide-to-incrementals/defining-the-genre/index.md'];

    return ret;
  }
};
