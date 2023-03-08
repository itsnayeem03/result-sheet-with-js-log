let name =prompt('what is your name?');
let age =prompt('How old you are');
let className =prompt('Class');
let roll =prompt('CLass Roll');
let ban =prompt('Bangla Marks');
let eng =prompt('English Marks');
let math =prompt('Math Marks');
let his =prompt('History Marks');
let gpa;
let grad;


console.log(`
Nmae => ${name} 
Age => ${age}
Class => ${className}
Roll => ${roll}
----------------------------
Subject:- Marks:    GPA:-   GRAD:-
Bangla :- ${ban}    ${getGpa(ban)}  ${getGrad(ban)}
English :- ${eng}   ${getGpa(eng)}  ${getGrad(eng)}
Mathmeticks :- ${math}  ${getGpa(math)} ${getGrad(math)}
History :- ${his}   ${getGpa(his)}  ${getGrad(his)}

`);