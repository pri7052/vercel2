import fs from "fs";
import path from "path";
export const getAllFiles = (folderPath: string) => {
  try {
    let response: string[] = [];

    const allFilesAndFolders = fs.readdirSync(folderPath);
    allFilesAndFolders.forEach((file) => {
      const fullfilePath = path.join(folderPath, file);
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
