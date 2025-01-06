<<<<<<< HEAD
function verifyAdminPassword() {
    const password = document.getElementById('admin-password').value;
    const errorMessage = document.getElementById('error-message');

    // รหัสผ่านที่ถูกต้อง
    const correctPassword = "181412";

    if (password === correctPassword) {
        window.location.href = "admin-dashboard.html"; // เปลี่ยนเป็นหน้าจัดการแอดมิน
    } else {
        errorMessage.textContent = "รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง!";
        errorMessage.style.display = "block";
    }
}
=======
function verifyAdminPassword() {
    const password = document.getElementById('admin-password').value;
    const errorMessage = document.getElementById('error-message');

    // รหัสผ่านที่ถูกต้อง
    const correctPassword = "181412";

    if (password === correctPassword) {
        window.location.href = "admin-dashboard.html"; // เปลี่ยนเป็นหน้าจัดการแอดมิน
    } else {
        errorMessage.textContent = "รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง!";
        errorMessage.style.display = "block";
    }
}
>>>>>>> 8fd67c4fc666dee14ad9fc0e62b7d334401e73d8
