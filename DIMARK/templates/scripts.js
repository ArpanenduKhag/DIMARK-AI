/*
    function showSubSelection(selectedValue) {
      const subSelectionContainer = document.getElementById(
        "sub-selection-container"
      );
      subSelectionContainer.innerHTML = "";

      if (selectedValue === "Furniture") {
        const furnitureOptions = [
          { value: "Chair", text: "Chair" },
          { value: "Sofa", text: "Sofa" },
          { value: "Bed", text: "Bed" },
        ];

        const subSelect = document.createElement("select");
        subSelect.className = "formbold-form-input";
        subSelect.name = "furniture-sub-selection";
        subSelect.id = "furniture-sub-selection";

        furnitureOptions.forEach((option) => {
          const opt = document.createElement("option");
          opt.value = option.value;
          opt.text = option.text;
          subSelect.appendChild(opt);
        });

        subSelectionContainer.appendChild(subSelect);
      } else if (selectedValue === "Beauty") {
        const beautyOptions = [
          { value: "Makeup", text: "Makeup" },
          { value: "Cosmetic", text: "Cosmetic" },
          { value: "Products", text: "Products" },
        ];

        const subSelect = document.createElement("select");
        subSelect.className = "formbold-form-input";
        subSelect.name = "beauty-sub-selection";
        subSelect.id = "beauty-sub-selection";

        beautyOptions.forEach((option) => {
          const opt = document.createElement("option");
          opt.value = option.value;
          opt.text = option.text;
          subSelect.appendChild(opt);
        });

        subSelectionContainer.appendChild(subSelect);
      }
    }
    */
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

function changeOperationType() {
  var occupation = document.getElementById("occupation").value;
  var operationSelect = document.getElementById("operation-select");
  var noOfStoresSelect = document.getElementById("no-of-stores-select");
  var operationTypeDiv = document.getElementById("operation-type");
  var noOfStoresDiv = document.getElementById("no-of-stores");

  operationSelect.innerHTML = "";
  noOfStoresSelect.innerHTML =
    "<option value=''>Select</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10+</option>";

  if (occupation === "Online") {
    operationTypeDiv.style.display = "block";
    noOfStoresDiv.style.display = "none";
    operationSelect.innerHTML =
      "<option value=''>Select</option><option value='App'>App</option><option value='Website'>Website</option><option value='Whatsapp'>Whatsapp</option>";
  } else if (occupation === "Local") {
    operationTypeDiv.style.display = "none";
    noOfStoresDiv.style.display = "block";
  } else if (occupation === "Hybrid") {
    operationTypeDiv.style.display = "block";
    noOfStoresDiv.style.display = "block";
    operationSelect.innerHTML =
      "<option value=''>Select</option><option value='App'>App</option><option value='Website'>Website</option><option value='Whatsapp'>Whatsapp</option>";
  }
}

// Get the tags and input elements from the DOM
const tags = document.getElementById("tags");
const input = document.getElementById("input-tag");

// Add an event listener for keydown on the input element
input.addEventListener("keydown", function (event) {
  // Check if the key pressed is 'Enter'
  if (event.key === "Enter") {
    // Prevent the default action of the keypress
    // event (submitting the form)
    event.preventDefault();

    // Create a new list item element for the tag
    const tag = document.createElement("li");

    // Get the trimmed value of the input element
    const tagContent = input.value.trim();

    // If the trimmed value is not an empty string
    if (tagContent !== "") {
      // Set the text content of the tag to
      // the trimmed value
      tag.innerText = tagContent;

      // Add a delete button to the tag
      tag.innerHTML += '<button class="delete-button">X</button>';

      // Append the tag to the tags list
      tags.appendChild(tag);

      // Clear the input element's value
      input.value = "";
    }
  }
});

// Add an event listener for click on the tags list
tags.addEventListener("click", function (event) {
  // If the clicked element has the class 'delete-button'
  if (event.target.classList.contains("delete-button")) {
    // Remove the parent element (the tag)
    event.target.parentNode.remove();
  }
});

function handleFormSubmit() {
  // Prevent the default form submission
  event.preventDefault();

  // Perform your form validation or processing here if needed

  // Redirect to preview.html
  window.location.href = "preview1.html";
}

/*UPLOAD*/
//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input2 = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
  input2.click(); //if user click on the button then the input also clicked
};

input2.addEventListener("change", function () {
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile() {
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
