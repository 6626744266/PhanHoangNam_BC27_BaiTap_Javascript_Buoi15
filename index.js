//=====================Bài 1=======================//

//function đc gọi khi click vào button tính điểm
// B1: xác định đầu vào : 3 môn thi , khu vực, đối tượng, điểm chuẩn

// B2:xử lý tính điểm
//tạo biến để hứng điểm khu vực
// tạo biến để hứng điểm đối tượng
// tạo biến để tính tổng điểm
// tạo biến để tính điểm tổng kết

// B3: Xuất kết quả ra màn hình

function totalMark() {
  var diem1 = +document.getElementById("firstMark").value;
  var diem2 = +document.getElementById("secondMark").value;
  var diem3 = +document.getElementById("thirdMark").value;
  var diemChuan = +document.getElementById("benchmark").value;

  var diemKhuVuc = getAreaMark();
  var diemDoiTuong = getTypeMark();
  var tongDiem = tinhTongDiem(diem1, diem2, diem3);
  var diemTongKet = tongDiem + diemKhuVuc + diemDoiTuong;
  hienThi(diem1, diem2, diem3);

  function hienThi() {
    if (!diem1 || !diem2 || !diem3) {
      document.getElementById("ketQua").style.display = "block";
      document.getElementById(
        "spanKetQua"
      ).innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
    } else {
      if (diemTongKet >= diemChuan) {
        document.getElementById("ketQua").style.display = "block";
        document.getElementById(
          "spanKetQua"
        ).innerHTML = `Bạn đã đậu. Tổng điểm: ${diemTongKet}`;
      } else {
        document.getElementById("ketQua").style.display = "block";
        document.getElementById(
          "spanKetQua"
        ).innerHTML = `Bạn đã rớt. Tổng điểm: ${diemTongKet}`;
      }
    }
  }
}

function getAreaMark() {
  var khuVuc = document.getElementById("areaSelector").value;
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

function getTypeMark() {
  var doiTuong = document.getElementById("typeSelector").value;
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
}

function tinhTongDiem(diem1, diem2, diem3) {
  return diem1 + diem2 + diem3;
}

//=====================Bài 1=======================//

//=====================Bài 2=======================//

/*B1: input 
    tên khách hàng
    số kw

B2: tính toán 

B3: xuất kết quả ra màn hình






*/
function totalPrice() {
  var totalPrice = calculatePrice(getKw());
  document.getElementById("ketQua2").style.display = "block";
  if (getKw() > 0) {
    document.getElementById(
      "spanKetQua2"
    ).innerHTML = `Họ tên: ${getName()}. Tiền điện: ${totalPrice.toLocaleString()}`;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }
}

function getName() {
  return document.getElementById("getName").value;
}

function getKw() {
  return +document.getElementById("getKw").value;
}

function calculatePrice(a) {
  if (a <= 50) {
    return 500 * a;
  } else if (a <= 100) {
    return 500 * 50 + 650 * (a - 50);
  } else if (a <= 200) {
    return 500 * 50 + 650 * 50 + 850 * (a - 100);
  } else if (a <= 350) {
    return 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (a - 200);
  } else {
    return 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (a - 350);
  }
}
//=====================Bài 2=======================//
