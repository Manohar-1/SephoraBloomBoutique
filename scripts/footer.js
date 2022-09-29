import footer from "../components/footercomponents.js";
document.querySelector("footer").innerHTML = footer();

document
  .querySelector("#newslettersignupbutton")
  .addEventListener("click", function () {
    // console.log("function check")
    let input = document.getElementById("newsletterinput").value;
    if (input != "" && input.includes("@") && input.includes(".")) {
      alert("Welcome to Sephora Community");
      document.getElementById("newsletterinput").value = "";
    } else if (input == "") {
      alert("input can't be empty");
      document.getElementById("newsletterinput").value = "";
    } else {
      alert("Please provide a valid email id format");
      document.getElementById("newsletterinput").value = "";
    }
  });
