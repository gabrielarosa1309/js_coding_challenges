const solution = number => {
    let sum = 0

    for (let index = 1; index < number; index++){
        if (index % 3 === 0 || index % 5 === 0) {
            sum = sum += index
        }
    }

    return sum
  };
  
  console.log(solution(0)); // 0
  console.log(solution(-15)); // 0
  console.log(solution(10)); // 23
  console.log(solution(20)); // 78
  console.log(solution(200)); // 9168