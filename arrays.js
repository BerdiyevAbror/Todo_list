const pets = ["it", "mushuk", "tovuq", "kuchuk",1,3,7];

const users=[
    {name:"Abror", phone:"+998901101031",city:"Tashkent"},
    {name:"Ibrat", phone:"+998950651701",city:"Qarshi"},
    {name:"Lazizbek", phone:"+998950298116",city:"Samarqand"},
]

const numbers=[1,32,23]

for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
}

pets.forEach((item, i) => {
//   console.log(i+1, item);
});

//  pets.push()
//  pets.unshift()

//  pets.pop()
//  pets.shift()
const newarray=pets.find((pet, idx)=>{
    if (pet==='it') {
        return pet
    }
})

const found=users.find((user,idx)=>{
    if (user.name==="Ibrat") {
        // console.log(idx,user.phone);
    }
})
const sorted=pets.sort()
// console.log(sorted);

const numbber=numbers.sort((a,b)=>a-b)
// console.log(numbber);
// console.log(numbber.reverse());

// ->

const changearray=pets.map((pet)=>{
    return pet+"lar"
})
// console.log(changearray);

const filterr=pets.filter((pet)=>{
    if(typeof pet !=='number'){
        return pet
    }
})
console.log(filterr);