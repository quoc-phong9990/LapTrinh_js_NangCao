const game = {
    team1: "thailand",
    teem2: "vietnam",

    players: [
        [
            "neuer",
            "kloss",
            "clupe",
            "okala",
            "kilamo",
            "sinva",
            "opalic",
            "siliar",
            "sinva",
            "opalic",
            "siliar",
        ],
        [
            "tien dung",
            "quang hai",
            "que ngoc hai",
            "xuan truong",
            "tony kroos",
            "xuan manh",
            "cong phuong",
            "van toan",
            "van quy",
            "quoc tuan",
            "van linh",

        ],
    ],
    score:"4.0",
    scored:["sinva","kloss","cong phuong"],
    Date:"Nov 9th,2024",
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },

}
// Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
const[gk, ...fieldPlayers]=players1;
console.log(gk,fieldPlayers);

const[gk2, ...fieldPlayers2]=players2;
console.log(gk2,fieldPlayers2);
// 3/3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allcauthu=[...players1, ...players2]
console.log(allcauthu);
// 4Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1
// mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
// 'Thiago', 'Coutinho' và 'Perisic'

const players1Final=[...players1, 'Thiago', 'Coutinho', 'Perisic']
// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là
// 'team1', 'draw' và 'team2')
const {odds: team1, x:draw,team2}=game;

// // 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
// spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
const printGoals= function (...players) {
    console.log(`so cau thu ghi ban of tran dau la:${players.length}`);
}
printGoals(...game.scored );
const namecauthughiban=game.scored;
console.log("ten cac cau thu ghi ban la",namecauthughiban);
// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà
// không sử dụng if/else hoặc toán tử 3 ngôi.
team1<team2 &&console.log("team1 win");
team1>team2 &&console.log("team2 win");

