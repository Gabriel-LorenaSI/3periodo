// X - Movimento, Y - Movimento, R - Tamanho e Cor
class Bola { 
    _v = 10
    constructor(x,y,r,cor){
        this._x = x;
        this._y = y;
        this._r = r;
        this._cor = cor;
    };

    render(div){
        div.style.width = this._r * 2;
        div.style.top = this._y + "px";
        div.style.left = this._x + "px";

    }


    moveUp(){this._y -= this._v;}
    moveDown(){this._y += this._v;}
    moveLeft(){this._x -= this._v;}
    moveRight(){this._x += this._v;}
}

const bola = new Bola(10,10,50,'#984432');
const bola = document.getElementById("bola");

window.addEventListener("keydown", (e)=>{

    switch(e.key){
        case "ArrowUp":
            bola.moveUp();
            bola.render(div);
            break
        case "ArrowDown":
            bola.moveDown();
            bola.render(div);
           break
        case "ArrowLeft":
            bola.moveLeft();
            bola.render(div);
           break
        case "ArrowRight":
            bola.moveRight();
            bola.render(div);
           break
    }
});

