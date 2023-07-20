let loops =
[{ "name":"naresh","age":25},{"name":"harish","age":24},{"name":"mythili","age":15}]

for(let i=0;i<loops.length;i++){
    console.log(loops[i].name);
    console.log(loops[i].age);
}

for(let keys in loops){
    console.log(loops[keys]);
}

for(let values of loops){
    console.log(values);
}

loops.forEach(values => console.log(values));