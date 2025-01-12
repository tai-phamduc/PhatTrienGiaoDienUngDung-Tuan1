(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";
  
    // Attach an event listener to the body element
    document.body.addEventListener("click", function () {
      header.style.color = "blue";
    });
  })();
  