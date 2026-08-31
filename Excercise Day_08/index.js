const adjectives = ["Crazy","Amazing","Fire"];
const shopName = ["Engine","Foods","Garments"];
const extraWord = ["Bros","Limited","Hub"];

function buisnessNameGenerator(){
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const shop = shopName[Math.floor(Math.random() * shopName.length)];
    const extra = extraWord[Math.floor(Math.random() * extraWord.length)];

    return `${adj} ${shop} ${extra}`;
}

for(let i=0;i<5;i++){
    console.log(buisnessNameGenerator());
}
