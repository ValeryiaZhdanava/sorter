class Sorter {

    constructor() {
        this.array = [];
        this.compareFunction = null;
    }

    add(element) {
        this.array.push(element);
        return this.array;
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        indices.sort(this.compareNumeric);
        if (indices.length !== 1 && this.compareFunction === null) {
            for (let i = 0; i < this.array.length; i++) {
                for (let j = 0; j < indices.length; j++) {
                    if (this.array[indices[j]] > this.array[indices[j + 1]]) {
                        const temp = this.array[indices[j]];
                        this.array[indices[j]] = this.array[indices[j + 1]];
                        this.array[indices[j + 1]] = temp;
                    }
                }
            }
        } else if (this.compareFunction !== null) {
            let list = [];
            for (let i = 0; i < indices.length; i++) {
                list.push(this.array[indices[i]]);
            }
            list.sort(this.compareFunction);
            for (let j = 0; j < indices.length; j++) {
                this.array[indices[j]] = list[j];
            }
        }
        return this.array;
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }

    compareNumeric(a, b) {
        return (a > b) ? 1 : -1;
    }
}

module.exports = Sorter;