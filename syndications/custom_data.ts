import { getProperties, sendMessage, uploadMedia } from "./indiekit";

async function getInput(prompt: string) {
    console.log(prompt);
    for await (const code of console as unknown as AsyncIterable<string>) {
        return code;
    }
    throw "Couldn't get input from user; This shouldn't happen";
}

async function updatePost(url: string, properties: Record<string, unknown>, action = "update") {
    await sendMessage(JSON.stringify({
        action,
        url,
        ...properties
    })).then(async res => {
        if ([200, 201, 204].includes(res.status)) {
            console.log(await res.json());
        } else {
            console.warn("Failed to send message to indiekit", res, await res.text());
            throw res;
        }
    });
}

const command = process.argv[2];
if (command === "list") {
    listReplies();
} else if (command === "add") {
    addReply();
} else if (command === "clear") {
    clearReplies();
} else {
    console.log("Call this script with the command you'd like to perform:");
    console.log(`${process.argv.slice(0, 1).join(" ")} [COMMAND]`);
    console.log("Available commands:");
    console.log("   list:  Print the replies on a post");
    console.log("   add:   Add a new reply to a post");
    console.log("   clear: Remove all replies from a post");
}

async function listReplies() {
    const url = await getInput("Input the url of the post to list the replies of:");
    await getProperties(url, "replies").then(({ replies }) =>
        console.log(...(replies as unknown[]).map(r => JSON.stringify(r)))
    );
}

async function addReply() {
    const url = await getInput("Input the url of the post add a reply to:");
    const syndication = await getInput("Input the url of the reply:");
    const body = await getInput("Input the html of the reply:");
    const published = await getInput("Input the timestamp of the reply:");
    const author = {
        name: await getInput("Input the name of the reply's author:"),
        url: await getInput("Input the canonical url of the reply's author:"),
        image: await uploadMedia(await getInput("Input the address of the reply's author's pfp:"))
    };

    await updatePost(url, {
        add: {
            replies: [
                {
                    body,
                    author,
                    published: new Date(
                        Number.isNaN(parseInt(published)) ? published : parseInt(published)
                    ).getTime(),
                    syndication
                }
            ]
        }
    });
}

async function clearReplies() {
    const url = await getInput("Input the url of the post to clear the replies of:");
    await updatePost(url, {
        delete: "replies"
    });
}
