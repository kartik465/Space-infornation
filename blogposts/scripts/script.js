// Show or hide the button based on scroll position
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

// Function to scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("blog-search-input");
  const cards = document.querySelectorAll(".card");
  const noResultsMessage = document.createElement("div");
  noResultsMessage.id = "no-results-message";
  noResultsMessage.textContent = "No results found.";
  noResultsMessage.style.display = "none";
  noResultsMessage.style.textAlign = "center";
  noResultsMessage.style.position = "fixed";
  noResultsMessage.style.left = "50%";
  noResultsMessage.style.transform = "translateX(-50%)";
  noResultsMessage.style.bottom = "20px";
  noResultsMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  noResultsMessage.style.padding = "10px 20px";
  noResultsMessage.style.color = "white";

  function showNoResultsMessage() {
    noResultsMessage.style.display = "block";
    noResultsMessage.classList.add("fade-in");
    centerNoResultsMessage();
  }

  function centerNoResultsMessage() {
    noResultsMessage.style.left = "50%";
    noResultsMessage.style.transform = "translateX(-50%)";
  }

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let foundResults = false;

    cards.forEach((card) => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const text = card.querySelector(".card-text").textContent.toLowerCase();

      if (title.includes(searchTerm) || text.includes(searchTerm)) {
        card.style.display = "block";
        card.classList.add("fade-in");
        foundResults = true;
      } else {
        card.style.display = "none";
        card.classList.remove("fade-in");
      }
    });

    if (!foundResults && searchTerm !== "") {
      showNoResultsMessage();
    } else {
      noResultsMessage.style.display = "none";
      noResultsMessage.classList.remove("fade-in");
    }

    if (searchTerm === "") {
      cards.forEach((card) => {
        card.style.display = "block";
        card.classList.remove("fade-in");
      });
      noResultsMessage.style.display = "none";
      noResultsMessage.classList.remove("fade-in");
    }
  });

  noResultsMessage.style.display = "none";

 // const blogLinks = [
   // {  url: "mercury.html" },
  //  {  url: "blog2.html" },
  //  {  url: "blog3.html" },
  //  {  url: "blog4.html" },
 //   {  url: "blog5.html" },
  //  {  url: "blog6.html" }
 // ];
  // Function to redirect to the selected blog page
  function redirectToBlog(url) {
    window.location.href = url;
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      redirectToBlog(blogLinks[index].url);
    });
  });

  const latestBlogSection = document.getElementById("latest-blog-section");
  if (latestBlogSection) {
    latestBlogSection.insertAdjacentElement("afterend", noResultsMessage);
  } else {
    document.body.appendChild(noResultsMessage);
  }
});
