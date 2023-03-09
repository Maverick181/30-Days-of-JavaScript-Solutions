const mounthly = /\b\d{4}\b/g  
const annualBonus = /\d{5}/g  
const txt =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const matches = txt.match(mounthly)
console.log(matches);
const matches1 = parseInt(txt.match(annualBonus))
console.log(matches1);
let totMounthly = matches.reduce((arr,cv) =>arr +=cv*12 ,0)
let totalAnnualIncome = totMounthly + matches1
console.log(totalAnnualIncome)  


const text = `The position of some particles on the horizontal x-axis  -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.
                 Extract these numbers and find the distance between the two furthest particles.`;
const pattern = /-?\d+/g
const points = text.match(pattern)
const sortedPoints = points.sort((a,b)=> {return a-b});
let differences = parseInt (sortedPoints[sortedPoints.length - 1]-sortedPoints[0])
console.log(differences);

//to check for javascript valid variable
const is_valid_variable = str =>{
    const pat1= /[a-zA-Z_$][a-zA-Z0-9_$]*$/ 
    const match = str.match(pat1);
    if(match.index !== 0)
        console.log(false);
    else 
        console.log(true);
}
is_valid_variable('first_name') 
is_valid_variable('first-name') 
is_valid_variable('1first_name') 
is_valid_variable('firstname') 

