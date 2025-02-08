import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { response } from "express";
import fs from "fs";

const client = new S3Client({
    region: "APAC",

    endpoint:
        "https://5a28489961451b5d677978f56fb70ca9.r2.cloudflarestorage.com/vercel",
    credentials: {
        accessKeyId: "149a6e71ea22b4fec578998ca6646e60",
        secretAccessKey:
            "9d229d729d48e4ddaaebe82c80fd7cf9ae922a37664ebbc066eb315c3b558c66",
    },
});
// localPath="c:\users\princ\desktop\code\vercel\dist\output\ew48v\src\app.jsx"
// localPath="c:/users/princ/desktop/code/vercel/dist/output/ew48v/src/app.jsx"
// fileName="output\ew48v\"
export const uploadFile = async (fileName: string, localFilePath: string) => {
    console.log("called");
    const fileContent = fs.readFileSync(localFilePath);
    const command = new PutObjectCommand({
        Body: fileContent,
        Bucket: "vercel",
        Key: "fileName",
    });
    const response = await client.send(command);

    console.log(response);
};
