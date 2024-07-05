/*UPLOAD*/
// selecting all required elements
const dropArea1 = document.querySelector(".drag-area1"),
  dragText1 = dropArea1.querySelector("header"),
  button1 = dropArea1.querySelector("button"),
  input1 = dropArea1.querySelector("input");

const dropArea2 = document.querySelector(".drag-area2"),
  dragText2 = dropArea2.querySelector("header"),
  button2 = dropArea2.querySelector("button"),
  input2 = dropArea2.querySelector("input");

let file1, file2; // global variables to store uploaded files

// button 1 events
button1.onclick = () => {
  input1.click(); // if user clicks on the button, the input also clicks
};

input1.addEventListener("change", function () {
  file1 = this.files[0];
  dropArea1.classList.add("active");
  showFile1(); // calling function
});

dropArea1.addEventListener("dragover", (event) => {
  event.preventDefault(); // preventing from default behaviour
  dropArea1.classList.add("active");
  dragText1.textContent = "Release to Upload File";
});

dropArea1.addEventListener("dragleave", () => {
  dropArea1.classList.remove("active");
  dragText1.textContent = "Drag & Drop to Upload File";
});

dropArea1.addEventListener("drop", (event) => {
  event.preventDefault(); // preventing from default behaviour
  file1 = event.dataTransfer.files[0];
  showFile1(); // calling function
});

// button 2 events
button2.onclick = () => {
  input2.click(); // if user clicks on the button, the input also clicks
};

input2.addEventListener("change", function () {
  file2 = this.files[0];
  dropArea2.classList.add("active");
  showFile2(); // calling function
});

dropArea2.addEventListener("dragover", (event) => {
  event.preventDefault(); // preventing from default behaviour
  dropArea2.classList.add("active");
  dragText2.textContent = "Release to Upload File";
});

dropArea2.addEventListener("dragleave", () => {
  dropArea2.classList.remove("active");
  dragText2.textContent = "Drag & Drop to Upload File";
});

dropArea2.addEventListener("drop", (event) => {
  event.preventDefault(); // preventing from default behaviour
  file2 = event.dataTransfer.files[0];
  showFile2(); // calling function
});

// show file functions
function showFile1() {
  let fileType = file1.type; // getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; // adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    // if user selected file is an image file
    let fileReader = new FileReader(); // creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; // passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="image">`; // creating an img tag and passing user selected file source inside src attribute
      dropArea1.innerHTML = imgTag; // adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(file1);
  } else {
    alert("This is not an Image File!");
    dropArea1.classList.remove("active");
    dragText1.textContent = "Drag & Drop to Upload File";
  }
}

function showFile2() {
  let fileType = file2.type; // getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; // adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    // if user selected file is an image file
    let fileReader = new FileReader(); // creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; // passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="image">`; // creating an img tag and passing user selected file source inside src attribute
      dropArea2.innerHTML = imgTag; // adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(file2);
  } else {
    alert("This is not an Image File!");
    dropArea2.classList.remove("active");
    dragText2.textContent = "Drag & Drop to Upload File";
  }
}

/*NAVBAR*/
const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");

btn_menu.addEventListener("click", function () {
  side_bar.classList.toggle("expand");
  changebtn();
});

function changebtn() {
  if (side_bar.classList.contains("expand")) {
    btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

const btn_theme = document.querySelector(".theme-btn");
const theme_ball = document.querySelector(".theme-ball");

const localData = localStorage.getItem("theme");

if (localData == null) {
  localStorage.setItem("theme", "light");
}

if (localData == "dark") {
  document.body.classList.add("dark-mode");
  theme_ball.classList.add("dark");
} else if (localData == "light") {
  document.body.classList.remove("dark-mode");
  theme_ball.classList.remove("dark");
}

btn_theme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  theme_ball.classList.toggle("dark");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
