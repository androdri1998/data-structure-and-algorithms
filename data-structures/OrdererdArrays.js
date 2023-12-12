class OrderedArray {
  constructor() {
    this.data = [];
  }
  getAll() {
    return this.data;
  }
  size() {
    return this.data.length;
  }
  findRightPlace(array) {
    for (let index = this.size() - 1; index > 0; index--) {
      let leftIndex = index - 1;

      if (array[index] <= array[leftIndex]) {
        [array[index], array[leftIndex]] = [array[leftIndex], array[index]];
        continue;
      }
      break;
    }
  }
  add(element) {
    this.data.push(element);
    this.findRightPlace(this.data);
  }
}

const orderedArray = new OrderedArray();
orderedArray.add(10);
orderedArray.add(5);
orderedArray.add(8);
orderedArray.add(11);
orderedArray.add(6);
console.log(orderedArray.getAll());
// output:  [ 5, 6, 8, 10, 11 ];
