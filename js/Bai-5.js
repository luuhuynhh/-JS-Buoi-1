/** BÀI 5 - TÍNH TỔNG 2  KÝ SỐ
 * Viết chương trình nhập vào 1 số có 2 chữ số
 * Tính tổng 2 ký số của số vừa nhập
 * 
 * Ví dụ:
 * 12 => Tổng là 1 + 2 = 3
 * 44 => Tổng là 4 + 4 = 8
 * 
 * Gợi ý:
 * Cách lấy số hàng đơn vị: so_hang_dv = so % 10
 * Cách lấy số hàng chục: so_hang_chuc = Math.floor(so / 10)
 */

/** MÔ HÌNH 3 KHỐI
 * Đầu vào:
 *  - Số có 2 kí số (number)
 * Xử lý:
 *  - Lấy hàng đơn vị của số (dv = number % 10)
 *  - Lấy hàng chục của số (chuc = Math.floor(number / 10))
 *  - Tính tổng của số hàng đơn vị và số hàng chục của số
 *  - tong = dv + chuc
 * Đầu ra:
 *  - In ra tổng 2 ký số của số đầu vào (của number) / In tong
 */

var number = 16;

var dv = number % 10;
var chuc = Math.floor(number / 10);
var tong = dv + chuc;

console.log("Tổng 2 ký số:", tong);