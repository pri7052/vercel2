"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllFiles = (folderPath) => {
    try {
        let response = [];
        const allFilesAndFolders = fs_1.default.readdirSync(folderPath);
        //console.log(allFilesAndFolders);
        allFilesAndFolders.forEach((file) => {
            //console.log(file);
            const fullfilePath = path_1.default.join(folderPath, file);
            console.log("fullfilePath is ", fullfilePath);
            // C:\Users\princ\Desktop\Code\vercel\dist\output\job4c\packages\ui\src\shad\ui\tabs.tsx
            if (fs_1.default.statSync(fullfilePath).isDirectory()) {
                response = response.concat((0, exports.getAllFiles)(fullfilePath));
            }
            else {
                response.push(fullfilePath);
            }
        });
        return response;
    }
    catch (e) {
        console.log(e);
        return [];
    }
};
exports.getAllFiles = getAllFiles;
