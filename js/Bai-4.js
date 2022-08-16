/** BÀI 4 - TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
 * Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN
 * Tính và xuất ra diện tích, chu vi của HCn đó
 * 
 * Công thức:
 * - Diện tích = dài * rộng
 * - Chu vi: (dài + rộng) / 2
 */

/** MÔ HÌNH 3 KHỐI
 * Đầu vào:
 *  - Chiều dài 
 *  - Chiều rộng
 * Xử lý:
 *  - Tính diện tích HCN = Chiều dài * Chiều rộng
 *  - Tính chu vi HCN = (Chiều dài + Chiều rộng) / 2
 * Đầu ra:
 *  - In ra diện tích HCN
 *  - In ra chu vi HCN
 */

var chieuDai = 16;
var chieuRong = 12;

var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) / 2;

console.log("Diện tích HCN:", dienTich);
console.log("Chu vi HCN:", chuVi);