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
  const formData = {
    website: document.getElementById("firstname").value,
    businessName: document.getElementById("lastname").value,
    businessType: document.getElementById("occupation").value,
    operationType: document.getElementById("operation-select").value,
    noOfStores: document.getElementById("no-of-stores-select").value,
    products: Array.from(document.getElementById("tags").children).map(
      (tag) => tag.textContent
    ),
    showWebsiteInAds: document.getElementById("no-of-stores-select").value,
    budget: document.getElementById("no-of-stores-select").value,
    objective: document.getElementById("no-of-stores-select").value,
    offer: document.getElementById("address").value,
    features: document.getElementById("message").value,
  };

  const jsonString = JSON.stringify(formData, null, 2);

  // Create a blob with the JSON data
  const blob = new Blob([jsonString], { type: "application/json" });

  // Create a link to download the JSON file
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "form_data.json";
  a.click();

  // Remove the link and blob
  URL.revokeObjectURL(url);
  a.remove();

  // Redirect to preview.html
  window.location.href = "preview1.html";
}

/*UPLOAD*/
