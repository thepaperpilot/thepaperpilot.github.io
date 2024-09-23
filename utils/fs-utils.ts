import fs from "fs";
import path from "path";

export function walk(
    dir: string,
    cb: (dir: string, resolvedFile: string, resolve: (value?: unknown) => void) => void): Promise<unknown> {

    const list = fs.readdirSync(dir);
    return Promise.all(list.map(file => {
        const resolvedFile = path.resolve(dir, file);
        const stat = fs.statSync(resolvedFile);
        if (stat.isDirectory()) {
            return walk(resolvedFile, cb);
        } else {
            return new Promise((resolve) => cb(dir, resolvedFile, resolve));
        }
    }));
}
