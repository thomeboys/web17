const fs =require("fs");
fs.readFile();
//__dirname:获取本文件路径
console.log(__dirname);
//拼接路径
console.log(__dirname+"\\public")
console.log(path.join(__dirname,"public","text"));
//git branch 查看分支
// git branch 分支名称 创建分支
// git checkout 分支名称 切换分支
// git branch -d 分支名称 删除分支（分支被合并后才允许删除）（-D 强制删除）
// git merge 分支名称   合并分支
//暂时保持更改
//存储临时分支改动：git stash
//恢复改动：git stash pop
//git remote add origin git@github.com:thomeboys/web17.git

