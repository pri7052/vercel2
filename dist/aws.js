"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const fs_1 = __importDefault(require("fs"));
const client = new client_s3_1.S3Client({
    region: "APAC",
    endpoint: "https://5a28489961451b5d677978f56fb70ca9.r2.cloudflarestorage.com/vercel",
    credentials: {
        accessKeyId: "149a6e71ea22b4fec578998ca6646e60",
        secretAccessKey: "9d229d729d48e4ddaaebe82c80fd7cf9ae922a37664ebbc066eb315c3b558c66",
    },
});
// localPath="c:\users\princ\desktop\code\vercel\dist\output\ew48v\src\app.jsx"
// localPath="c:/users/princ/desktop/code/vercel/dist/output/ew48v/src/app.jsx"
// fileName="output\ew48v\"
const uploadFile = (fileName, localFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("called");
    const fileContent = fs_1.default.readFileSync(localFilePath);
    const command = new client_s3_1.PutObjectCommand({
        Body: fileContent,
        Bucket: "vercel",
        Key: "fileName",
    });
    const response = yield client.send(command);
    console.log(response);
});
exports.uploadFile = uploadFile;
