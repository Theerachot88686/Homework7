const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  // 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
  for (const key in inputObj) {
    if (!inputObj[key].trim()) {
      setInvalidInputStyle(key);
      return false;
    }
  }

  // 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
  const trimmedUsername = inputObj.username.trim();
  if (
    trimmedUsername.length <= 3 ||
    /^\d/.test(trimmedUsername) ||
    /\s/.test(trimmedUsername)
  ) {
    alert(
      'กรุณากรอกชื่อผู้ใช้ที่มีความยาวมากกว่า 3 ตัวอักษร, ไม่นำหน้าด้วยตัวเลข, และไม่มี space คั่นกลาง'
    );
    setInvalidInputStyle('username');
    return false;
  }

  // 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
  const password = inputObj.password;
  if (password.length <= 4 || !/^(?=.*[A-Za-z])(?=.*\d).+$/.test(password)) {
    alert(
      'กรุณากรอกรหัสผ่านที่มีความยาวมากกว่า 4 ตัวอักษร และต้องมีทั้งตัวเลขและตัวอักษร'
    );
    setInvalidInputStyle('password');
    return false;
  }

  // ถ้า validate ผ่านให้ไปที่ https://www.example.com
  window.location.replace('https://www.example.com');

  return true;
};

const hdlLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);

// ฟังก์ชั่นเพิ่มสีแดงให้กับ input ที่ไม่ผ่านการตรวจสอบ
function setInvalidInputStyle(inputId) {
  const inputElement = document.getElementById(inputId);
  inputElement.style.backgroundColor = 'red';
}
