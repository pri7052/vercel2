import  express from 'express';
import   cors from "cors";
import simpleGit from 'simple-git';
import {generate} from "./utils"
import path from "path"
import { getAllFiles } from './file';
const app=express();

app.use(cors());
app.use(express.json())
console.log(path.join(__dirname,`output/randomstring`))
app.post("/deploy",async (req,res)=>{
    const repoUrl=req.body.repoUrl; // github.com url
    const id=generate();
    await simpleGit().clone(repoUrl, path.join(__dirname , `output/${id}`));
    const files= getAllFiles(path.join(__dirname,`output/${id}`))
    console.log(files)
    res.json({})
})
app.listen(3000)