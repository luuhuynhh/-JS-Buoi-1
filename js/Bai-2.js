/** BÀI 2 - TÍNH GIÁ TRỊ TRUNG BÌNH
 * Viết chương trình nhập vào 5 số thực.
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình.
 * 
 * Gợi ý: Giá trị trung bình là tổng của 5 số người dùng nhập chai cho 5.
 */

/** MÔ HÌNH 3 KHỐI
 * Đầu vào:
 *  - Số thứ 1
 *  - Số thứ 2
 *  - Số thứ 3
 *  - Số thứ 4
 *  - Số thứ 5
 * Xử lý:
 *  - Tính tổng 5 số = Số thứ 1 + ... + Số thứ 5
 *  - Tính trung bình 5 số = Tổng 5 số / 5
 * Đầu ra:
 *  - In ra giá trị trung bình 5 số
 */

var number1 = 19;
var number2 = 12;
var number3 = 5;
var number4 = 73;
var number5 = 31;

var tong5Number = number1 + number2 + number3 + number4 + number5;
var tb5Number = tong5Number / 5;

console.log("Giá trị trung bình của 5 số:", tb5Number);