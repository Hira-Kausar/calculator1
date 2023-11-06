#! /usr/bin/env node
import{add} from "./add.js";
import { subtract} from "./subtract.js";
import { divide } from "./divide.js";
import { multiply } from "./multiply.js";
import inquirer from "inquirer"; 

const answers= await inquirer.prompt([
    {
    message:"enter first number",
    type:"number",
    name:"num1"
},
{
    message:"enter second number",
    type:"number",
    name:"num2",
},
{ 
    message:"operation",
    type:"list",
    choices:["+","-","*","/"],
    name:"operation",
},
])

if (answers.operation==="+"){
    let result= add(answers.num1,answers.num2);
    console.log(result);
}else if(answers.operation==="-"){
    let result=subtract(answers.num1,answers.num2);
    console.log(result);
}else if (answers.operation==="*"){
        let result=multiply(answers.num1,answers.num2);
        console.log(result);
}else if(answers.operation==="/"){
            let result=divide(answers.num1,answers.num2);
            console.log(result);
}else {
    const result =answers
}