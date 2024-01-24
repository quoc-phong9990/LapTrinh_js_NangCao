const restaurant ={
    name:'Nguyen Quoc Phong ',
    location:'15 vo quy huan',
    categories:['carot','dauxanh','mamtom'],
    starterMenu:['lauthapcam','buncha','banhtrang'],
    mainMenu:['gatan','trungvitlon','banhgio'],
    
};



// phá hủy mảng
// destructoring
const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const [x ,y ,z] =arr;
console.log(x,y,z);
// lấy ra hai phần tử đầu trong mảng categories muốn lấy cách qua 1 pt thi  "[first,  ,second]""
const [first,second]=restaurant.categories
 console.log(first ,second);

