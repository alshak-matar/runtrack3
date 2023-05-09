function tri(numbers, order) {
  if (order === "asc") {
    return numbers.sort(function(a, b) {
      return a - b;
    });
  } else if (order === "desc") {
    return numbers.sort(function(a, b) {
      return b - a;
    });
  } else {
    return numbers;
  }
}

var numbers1 = [5, 2, 8, 1, 9];
console.log(tri(numbers1, "asc"));
console.log(tri(numbers1, "desc"));

var numbers2 = [10, 4, 7, 3, 6];
console.log(tri(numbers2, "asc"));
console.log(tri(numbers2, "desc"));

var numbers3 = [1, 2, 3, 4, 5];
console.log(tri(numbers3, "asc"));
console.log(tri(numbers3, "desc"));
