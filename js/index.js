

//bài 1: tính tiền lương nhân viên


function tinhTien() {

    var tienLuong1n = document.getElementById("tien-luong-1n").value;
    var soNgayLam = document.getElementById("ngay-lam").value;

    var tienLuong = tienLuong1n * soNgayLam;

    document.getElementById("ket-qua-bai-1").innerHTML = tienLuong;
    tagKetQua.innerHTML = tienLuong;
    tagKetQua.className = "alert bg-dark text-white p-3";
}


//bài 2: tính giá trị trung bình.

function tinhTrungBinh() {
    // Lấy giá trị của 5 số từ các phần tử input
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var num5 = parseInt(document.getElementById("num5").value);

    // Tính tổng của 5 số
    var sum = num1 + num2 + num3 + num4 + num5;

    // Tính giá trị trung bình bằng cách chia tổng cho số lượng số
    var avg = sum / 5;

    // Hiển thị kết quả trên trang web
    document.getElementById("ket-qua-bai-2").innerHTML = "Giá trị trung bình là: " + avg;
}

//bài 3: đổi ngoại tệ 

function doiNgoaiTe() {
    // Lấy giá trị số tiền và loại tiền tệ từ các phần tử input
    var amount = parseInt(document.getElementById("soTien").value);
    var currency = document.getElementById("tienTe").value;

    // Tính giá trị quy đổi sang USD
    var usdValue = 0;
    switch (currency) {
        case "USD":
            usdValue = amount;
            break;
        case "VND":
            usdValue = amount / 23500;
            break;
        case "EUR":
            usdValue = amount * 1.19;
            break;
        case "JPY":
            usdValue = amount / 110;
            break;
    }

    // Hiển thị kết quả quy đổi trên trang web
    var formatter = new Intl.NumberFormat('vn-VN');
    var result = "Số tiền quy đổi sang USD là: " + formatter.format(usdValue);
    document.getElementById("ket-qua-bai-3").innerHTML = result;
}

//bài 4: tính diện tích hình chữ nhật

function tinhDienTich() {
    var d = parseInt(document.getElementById("chieuDai").value);
    var r = parseInt(document.getElementById("chieuRong").value);

    var v = 2 * (d + r);
    var s = d * r;


    document.getElementById("ket-qua-bai-4").innerHTML = v;
    document.getElementById("ket-qua-bai-42").innerHTML = s;
    

}

//bài 5: tính tổng 2 ký số

function tinhTong2KySo() {
	let num = document.getElementById("num").value;
	let sum = parseInt(num[0]) + parseInt(num[1]);
	document.getElementById("ket-qua-bai-5").innerHTML = "Tổng của 2 chữ số là: " + sum;
}





