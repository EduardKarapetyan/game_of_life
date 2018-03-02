class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 8);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];


    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
        this.multiply++;
    }
}
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ]
    }
    stanalNorKordinatner() {
        this.directions = [
             [this.x - 1, this.y - 1],
             [this.x, this.y - 1],
             [this.x + 1, this.y - 1],
             [this.x - 1, this.y],
             [this.x + 1, this.y],
             [this.x - 1, this.y + 1],
             [this.x, this.y + 1],
             [this.x + 1, this.y + 1]
        ];
        for (let i of this.directions) {
            if (matrix[i[0]] && matrix[i[0]][i[1]] && matrix[i[0]][i[1]] == 1) {
                matrix[this.x][this.y] = 0;
                this.x = i[0];
                this.y = i[1];
                matrix[this.x][this.y] = 2;
                break;
            }
        }
    }



    yntrelvandak(ch) {
        this.stanalNorKordinatner;
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[1].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }

    sharjvel() {
        this.stanalNorKordinatner();
        }
    
    bazmanal() {
        this.energy++;
        var norVandak = random(this.yntrelVandak(1));
        if (this.energy >= 8 && norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy = 0;
        }
        this.energy++;
    }
}
