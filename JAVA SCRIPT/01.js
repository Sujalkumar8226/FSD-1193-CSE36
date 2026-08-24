const fs=require('fs');
fs.writeFile("student.txt","Hello this is student",function(err){
    if(err){
        console.log(err);

    }
    else{
        console.log("File written successfully");
    }
});
fs.readFile("student.txt","utf8",(err,data)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("file read successffully");

        console.log(data);
    }
    
});
