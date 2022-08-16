/** BÀI 1 - TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * Viết chương tình tính lương nhân viên.
 * Lương 1 ngày: 100.000
 * Cho người dùng nhập số ngày làm.
 * Công thức tính lương: Lương 1 ngày * số ngày làm
 */

/** MÔ HÌNH 3 KHỐI
 * Đầu vào:
 *  - Lương 1 ngày
 *  - Số ngày làm
 * Xử lý:
 *  - Tính tổng lương dựa vào công thức
 *  - Tổng lương = Lương 1 ngày * Số ngày làm
 * Đầu ra:
 *  - In ra Tổng lương
 */

const LUONG_1_NGAY = 100000;
const SO_NGAY_LAM = 24;

var tongLuong = LUONG_1_NGAY * SO_NGAY_LAM;

console.log("Tiền lương nhân viên:", tongLuong);