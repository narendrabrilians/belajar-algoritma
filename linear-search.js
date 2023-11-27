const linearSearch = (data, target) => {
  for (let i = 0; i <= data.length; i++) {
    if (data[i] === target) {
      return i;
    }
  }
  return -1;
};

const myData = [1, 2, 3, 4, 5];
const myTarget = 3;

const searching = linearSearch(myData, myTarget);
console.log(searching);
