let dieArray: { value: number, div: JQuery<HTMLElement>}[] = [];

class Die {

    constructor(public value: number, public div: JQuery<HTMLElement>) {
        this.value;
        this.roll();
        this.div = $(`<div></div>`);
        this.div.text(this.value);
        $(`#dieDiv`).append(this.div);
        this.div.css({
            "background-color": "grey",
            "height": "100px",
            "width": "100px",
            "float": "left",
            "margin-top": "1em",
            "margin-left": "1em",
            "border-radius": "15px",
            "text-align": "center",
            "line-height": "100px"
        });

        this.div.click(() => {
            this.roll();
            this.div.text(this.value);
        })

        $(`#rollBtn`).click(() => {
            dieArray.forEach(() => {
                this.roll();
                this.div.text(this.value);
            })
        })

        this.div.dblclick(() => {
            this.removeDie();
        })
    }

    public roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }

    public removeDie() {
        this.div.remove();
        let index = dieArray.indexOf(this);
        if (index !== -1) {
            dieArray.splice(index, 1);
        }
    }
}

$(`#generateBtn`).click(() => {
    let die = new Die(this.value, this.div);
    console.log(die);
    dieArray.push(die);
});

$(`#sumDice`).click(() => {
    let result = sumDice(dieArray);
    alert(result);
});

let sumDice = (arr: { value: number, div: JQuery<HTMLElement>}[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].value;
    }
    return sum;
}