"use strict";
const personalInfo = document.getElementById("personal-info");
const containerSubmitEmail = document.getElementById("container-submitEmail");
const wrongEmail = document.getElementById("wrongEmail");
const viewMoreButton = document.querySelectorAll(".viewmore");
const viewLessButton = document.querySelectorAll(".viewless");
const onMouseOverBlock = document.querySelectorAll(".border");
const viewContent = document.querySelectorAll(".viewContent");

function submitEmail() {
  // Lấy giá trị Input email và chuyển thành thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);

  // Nếu email đúng cú pháp trả về phần Thông tin cá nhân và ẩn phần email
  if (checkEmail) {
    personalInfo.classList.remove("d-none");
    containerSubmitEmail.classList.add("d-none");
  } else {
    wrongEmail.classList.remove("hidden");
  }
}

document.querySelector(".btn-primary").addEventListener("click", submitEmail);

for (let i = 0; i < onMouseOverBlock.length; i++) {
  // Hiên nút View More mỗi khi rê chuột vào
  onMouseOverBlock[i].addEventListener("mouseover", function () {
    if (viewLessButton[i].classList.contains("d-none"))
      viewMoreButton[i].classList.remove("d-none");
  });
  // Ẩn nút view more khi chuột di chuyển ra
  onMouseOverBlock[i].addEventListener("mouseout", function () {
    viewMoreButton[i].classList.add("d-none");
  });
  // Hiện phần tử khi click vào view more
  viewMoreButton[i].addEventListener("click", function () {
    viewContent[i].classList.remove("d-none");
    viewMoreButton[i].classList.add("d-none");
    viewLessButton[i].classList.remove("d-none");
  });
  // Ẩn phần tử khi click view less
  viewLessButton[i].addEventListener("click", function () {
    viewContent[i].classList.add("d-none");
    viewLessButton[i].classList.add("d-none");
    viewMoreButton[i].classList.remove("d-none");
  });
}
