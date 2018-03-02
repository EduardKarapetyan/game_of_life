var matrix = [[0, 0, 1, 0, 0],
    [1, 0, 0, 2, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0]
];

/*
for (let i = 0; i < 50; i++) {
    matrix[i] = [];
    for (let j = 0; j < 50; j++) {
        matrix[i][j] = 0;
    }
}

for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random()*matrix.length);
    let y = Math.floor(Math.random()*matrix[0].length);
    if (matrix[x][y] == 1){
        i--;
        continue;
    }
    matrix[x][y] = 1;
}
for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * matrix.length);
    let y = Math.floor(Math.random() * matrix[0].length);
    if (matrix[x][y] == 2) {
        i--;
        continue;
    }
    matrix[x][y] = 2;
}
*/



var side = 120;
var grassArr = [];
var xotakerArr = [];


function setup() {
    frameRate(25);
    createCanvas(matrix.length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }


        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            side = 1200 / matrix.length;

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
        }
    }
    if (frameCount % 6 == 0) {
        for (var i in grassArr) {
            grassArr[i].bazmanal();
        }
    }
    
    if (frameCount % 5 === 0) {
        for (var i in xotakerArr) {
            xotakerArr[i].sharjvel();
        }
    }
   
}

