document.addEventListener('DOMContentLoaded', function () {
    // Xử lý sự kiện cho nút Đăng ký
    var signUpButton = document.querySelector('button[id="large"]:nth-child(2)');
    signUpButton.addEventListener('click', function () {
        window.location.href = 'signup.html'; // Chuyển hướng đến trang đăng ký
    });

    // Xử lý sự kiện cho nút Đăng nhập
    var signInButton = document.querySelector('button[id="large"]:nth-child(3)');
    signInButton.addEventListener('click', function () {
        window.location.href = 'signin.html'; // Chuyển hướng đến trang đăng nhập
    });
});
