class customArray {

    constructor (custArr) {
        this.custArr = custArr
    }

    // Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne le nouveau tableau.
    push () {
        for(let i = 0; i < arguments.length; i++){
            this.custArr[this.custArr.length] = arguments[i]
        }

        return this.custArr
    }

    // Supprime le dernier élément d'un tableau et renvoie cet élément.
    pop () {
        let lastValue = this.custArr[this.custArr.length - 1]
        this.custArr.length = this.custArr.length - 1
        return lastValue
    }

    // Supprime le premier élément d'un tableau et renvoie cet élément.
    shift () {
        let firstValue = this.custArr[0]
        let guessArray = []
        for (let i = 1; i < this.custArr.length; i++) {
            guessArray[i-1] = this.custArr[i]
        }

        this.custArr = guessArray
        return firstValue
    }
}

let _customArray = new customArray(["@th3fr3dy", "@github"])
_customArray.push("@instagram", "@telegram")
_customArray.pop()
_customArray.shift()


