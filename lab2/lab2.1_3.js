// Mảng sự kiện trong trận đấu
const eventsArray = [
    [2, '⚽ BÀN THẮNG'],
    [12, '🔄 THAY NGƯỜI'],
    [80, '🟨 THẺ VÀNG'],
    [45, '⚽ BÀN THẮNG'],
    [64, '🟨 THẺ VÀNG'],
    [45, '⚽ BÀN THẮNG'],
    [67, '🔄 THAY NGƯỜI'],
    [22, '⚽ BÀN THẮNG'],
  ];
  
  // Yêu cầu 1: Tạo mảng các sự kiện khác nhau [...new Set(...)]: Sử dụng toán tử spread ([...]) để chuyển tất cả các giá trị trong Set thành một mảng mới.
  const uniqueEvents = [...new Set(eventsArray.map(event => event[1]))];
  console.log(uniqueEvents);
  
  // Yêu cầu 2: Xóa thẻ vàng phút 64
  const updatedEventsArray = eventsArray.filter(event => !(event[0] === 64 && event[1].includes('YELLOW CARD')));
  console.log(updatedEventsArray);
  // Yêu cầu 3: In ra console theo định dạng
  const totalEvents = updatedEventsArray.length;
  const averageEventsPerMinute = totalEvents / 90;
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / averageEventsPerMinute)} phút`);
  
  // Yêu cầu 4: In ra màn hình với đánh dấu hiệp 1 hay hiệp 2
  updatedEventsArray.forEach(event => {
    const minute = event[0];
    const action = event[1];
    const half = minute <= 45 ? '[HIỆP1]' : '[HIỆP2]';
    console.log(`${half} ${minute}: ${action}`);
  });


  // lab3
  // Chuỗi chứa thông tin về các chuyến bay
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Hàm trả về mã sân bay từ một chuỗi
const getCode = str => str.slice(0, 3).toUpperCase();

// Lặp qua mỗi phần tử trong mảng các chuyến bay (split('+'))
for (const flight of flights.split('+')) {
// Tách thông tin về chuyến bay thành các phần tử: type, from, to, time
const [type, from, to, time] = flight.split(';');

// Xây dựng chuỗi định dạng thông tin chuyến bay
const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);

// In ra console
console.log(output);
}

  
  
