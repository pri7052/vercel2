// Token value="6e4oZ9guYMG4cz7XdD8IPfD1I6otKJW0xWimtGqb"
// access key id="149a6e71ea22b4fec578998ca6646e60"
// secret key="9d229d729d48e4ddaaebe82c80fd7cf9ae922a37664ebbc066eb315c3b558c66"
// eu id="https://5a28489961451b5d677978f56fb70ca9.r2.cloudflarestorage.com"

import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utils";
import path from "path";
import { getAllFiles } from "./file";
import { uploadFile } from "./aws";
import { ConnectParticipant } from "aws-sdk";
const app = express();

app.use(cors());
app.use(express.json());
console.log(path.join(__dirname, `output/randomstring`));
app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl; // github.com url
    const id = generate();
    await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));
    const files = getAllFiles(path.join(__dirname, `output/${id}`));
    console.log(
        "path.join(__dirname, `output/${id}",
        path.join(__dirname, `output/${id}`)
    );
    files.forEach(async (file) => {
        console.log(file.slice(__dirname.length + 1), file);
        await uploadFile(
            //   "harkirat/package.json",
            //   "/Users/harkiratsingh/vercel/dist/output/whjfh/package.json"

            file.slice(__dirname.length + 1),
            file
        );
    });

    res.json({ id: id });
});
app.listen(3000);
