"use strict";
// Token value="6e4oZ9guYMG4cz7XdD8IPfD1I6otKJW0xWimtGqb"
// access key id="149a6e71ea22b4fec578998ca6646e60"
// secret key="9d229d729d48e4ddaaebe82c80fd7cf9ae922a37664ebbc066eb315c3b558c66"
// eu id="https://5a28489961451b5d677978f56fb70ca9.r2.cloudflarestorage.com"
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const simple_git_1 = __importDefault(require("simple-git"));
const utils_1 = require("./utils");
const path_1 = __importDefault(require("path"));
const file_1 = require("./file");
const aws_1 = require("./aws");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log(path_1.default.join(__dirname, `output/randomstring`));
app.post("/deploy", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoUrl = req.body.repoUrl; // github.com url
    const id = (0, utils_1.generate)();
    yield (0, simple_git_1.default)().clone(repoUrl, path_1.default.join(__dirname, `output/${id}`));
    const files = (0, file_1.getAllFiles)(path_1.default.join(__dirname, `output/${id}`));
    console.log("path.join(__dirname, `output/${id}", path_1.default.join(__dirname, `output/${id}`));
    files.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(file.slice(__dirname.length + 1), file);
        yield (0, aws_1.uploadFile)(
        //   "harkirat/package.json",
        //   "/Users/harkiratsingh/vercel/dist/output/whjfh/package.json"
        file.slice(__dirname.length + 1), file);
    }));
    res.json({ id: id });
}));
app.listen(3000);
