import fs from "fs";
import path from "path";
export const getAllFiles = (folderPath: string) => {
    try {
        let response: string[] = [];

        const allFilesAndFolders = fs.readdirSync(folderPath);
        //console.log(allFilesAndFolders);
        allFilesAndFolders.forEach((file) => {
            //console.log(file);
            const fullfilePath = path.join(folderPath, file);
            console.log("fullfilePath is ", fullfilePath);
            // C:\Users\princ\Desktop\Code\vercel\dist\output\job4c\packages\ui\src\shad\ui\tabs.tsx
            if (fs.statSync(fullfilePath).isDirectory()) {
                response = response.concat(getAllFiles(fullfilePath));
            } else {
                response.push(fullfilePath);
            }
        });
        return response;
    } catch (e) {
        console.log(e);
        return [];
    }
};
