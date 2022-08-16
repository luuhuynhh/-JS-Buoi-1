/** BÀI 3 - QUY ĐỔI TIỀN
 * Giá USD hiện tại là 23.500 VND
 * Viết chương trình quy đổi từ USD sang VND
 * Cho người dùng nhập vào số tiền USD
 * Tính và xuất ra số tiền sau quy đổi VND
 * 
 * Ví dụ:
 * Người dùng nhập 2 USD => Xuất ra 47.000 VND
 */

/** MÔ HÌNH 3 KHỐI
 * Đầu vào:
 *  - Giá 1 USD hiện nay
 *  - Số tiền USD cần quy đổi
 * Xử lý:
 *  - Tính số tiền quy đổi ra VND từ đồng USD dựa vào công thức
 *  - tienVND = tienUSD * Giá 1 USD
 * Đầu ra:
 *  - In ra số tiền sau quy đổi VND (tienVND)
 */

const GIA_1_USD = 23500;
var tienUSD = 16;

var tienVND = GIA_1_USD * tienUSD;

console.log(tienUSD + " USD = " + tienVND + " VND");