const arr = new Array(10);
const arr1 = [];
console.log(arr1);


let videoJuegos = ['Mario3', 'Dragon Ball', 'League Of Legends'];
console.log({videoJuegos});
console.log( videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Anthony',
    1+2,
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]],
];

console.log({arregloCosas});
console.log(arregloCosas[7][3]); // 'Dr. Light'
console.log(arregloCosas[7][4][1]); //Woodman