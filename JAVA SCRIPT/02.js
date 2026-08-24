const console = require("console");
const fs=require("fs"); // import the file
// create a blank file
fs.writeFile("student.txt" ,"Hello This is a student file",(error)=>{
if(error){
    console.log(error);

}
else{
    console.log("File is Successfully Created");
}
});
//read the file
fs.readFile("student.txt","UTF-8",(error,data1)=>{
      if(error){
        console.log(error);

      }else{
        console.log("Read the file content");
        console.log(data1);

      }
});
//update the file
fs.appendFile("student.txt","file for CSE students",(error)=>{
    if(error){
        console.log(error);

    }else{
        console.log("File is sucessfully update");
    }
});

//delete the file

fs.unlink("student.txt",(error)=>{

    if(error ){
        console.log(error);
    }else{
        console.log("File is successfully deleted");
    }
    });