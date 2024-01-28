
// 3.2
function checkDogs(dogsJulia, dogsKate) {
    // Bước 1: Tạo bản sao nông của mảng của Julia và xóa tuổi mèo
    const juliaCopy = dogsJulia.slice();
    juliaCopy.shift(); // Xóa tuổi mèo của chó đầu tiên
    juliaCopy.pop();   // Xóa tuổi mèo của chó cuối cùng
  
    // Bước 2: Tạo mảng có cả dữ liệu của Julia (đã sửa) và Kate
    const allDogs = juliaCopy.concat(dogsKate);
  
    // Bước 3: Kiểm tra và in thông tin cho từng con chó
    allDogs.forEach((age, index) => {
      const dogNumber = index + 1;
      if (age >= 3) {
        console.log(`Chó số ${dogNumber} là người lớn và ${age} tuổi`);
      } else {
        console.log(`Chó số ${dogNumber} vẫn là chó con và ${age} tuổi`);
      }
    });
  }
  
  // TEST DATA 1
  const dogsJulia1 = [3, 5, 2, 12, 7];
  const dogsKate1 = [4, 1, 15, 8, 3];
  console.log("Test Data 1:");
  checkDogs(dogsJulia1, dogsKate1);
  
  // TEST DATA 2
  const dogsJulia2 = [9, 16, 6, 8, 3];
  const dogsKate2 = [10, 5, 6, 1, 4];
  console.log("\nTest Data 2:");
  checkDogs(dogsJulia2, dogsKate2);
  


// 3.3
function calcAverageHumanAge(ages) {
    // Bước 1: Tính tuổi của chó theo tuổi của con người
    const humanAges = ages.map(age => (age <= 2) ? age * 2 : 16 + age * 4);

    // Bước 2: Loại trừ chó có tuổi nhỏ hơn 18 tuổi
    const adultsOnly = humanAges.filter(age => age > 18);

    // Bước 3: Tính tuổi trung bình của chó trưởng thành ra tuổi người
    if (adultsOnly.length > 0) {
        const averageAge = adultsOnly.reduce((sum, age) => sum + age, 0) / adultsOnly.length;
        return averageAge;
    } else {
        return "Không có chó trưởng thành nào trong danh sách";
    }
}

// TEST DATA 1
const testAges1 = [5, 2, 4, 1, 15, 8, 3];
const result1 = calcAverageHumanAge(testAges1);
console.log("Test Data 1:", result1);

// TEST DATA 2
const testAges2 = [16, 6, 10, 5, 6, 1, 4];
const result2 = calcAverageHumanAge(testAges2);
console.log("Test Data 2:", result2);


// lab3.4
// Mảng chứa thông tin của những chú chó
// Mảng chứa thông tin của những chú chó
const dogs = [
    { name: 'Max', weight: 5, owner: 'Sarah' },
    { name: 'Buddy', weight: 8, owner: 'John' },
    { name: 'Rocky', weight: 12, owner: 'Michael' },
    { name: 'Diesel', weight: 18, owner: 'Sarah' },
    { name: 'Bella', weight: 7, owner: 'Alice' },
    { name: 'Charlie', weight: 9, owner: 'Bob' },
    { name: 'Molly', weight: 3, owner: 'Sarah' },
  ];
  
  // Bước 1: Thêm thuộc tính recommendedFood vào mỗi object trong mảng
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // Bước 2: Tìm chú chó của Sarah và kiểm tra khẩu phần ăn
  const sarahDog = dogs.find(dog => dog.owner === 'Sarah');
  if (sarahDog) {
    const foodComparison = sarahDog.weight > sarahDog.recommendedFood ? 'ăn quá nhiều' : 'ăn quá ít';
    console.log(`Chó của Sarah, ${sarahDog.name}, ${foodComparison}.`);
  }
  
  // Bước 3: Tạo mảng chủ của những chó ăn quá nhiều và ăn quá ít
  const ownersEatTooMuch = dogs.filter(dog => dog.weight > dog.recommendedFood).map(dog => dog.owner);
  const ownersEatTooLittle = dogs.filter(dog => dog.weight < dog.recommendedFood).map(dog => dog.owner);
  
  // Bước 4: In ra chuỗi tương ứng
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs ăn quá nhiều!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs ăn quá ít!`);
  
  // Bước 5: Kiểm tra xem có chú chó nào ăn chính xác khẩu phần ăn khuyến nghị không
  const isExactFood = dogs.every(dog => dog.recommendedFood === dog.curFood);
  console.log("Các chú chó ăn chính xác khẩu phần ăn khuyến nghị:", isExactFood);
  
  // Bước 6: Kiểm tra xem có chú chó nào ăn ở mức hợp lý không
  const isReasonableFood = dogs.every(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
  console.log("Các chú chó ăn ở mức hợp lý:", isReasonableFood);
  
  // Bước 7: In ra thông tin của chú chó có khẩu phần ăn hợp lý
  const dogsWithReasonableFood = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
  console.log("Các chú chó có khẩu phần ăn hợp lý:", dogsWithReasonableFood);
  
  // Bước 8: Tạo mảng mới và sắp xếp theo khẩu phần ăn đề nghị
  const sortedDogsByRecommendedFood = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log("Chú chó sắp xếp theo khẩu phần ăn đề nghị:", sortedDogsByRecommendedFood);
  