const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    const imageURL = URL.createObjectURL(file);
    preview.src = imageURL;
    preview.style.display = "block";
  }
});
