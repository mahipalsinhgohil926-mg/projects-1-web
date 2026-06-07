document.addEventListener("DOMContentLoaded", () => {
  // Target the link instead of just the SVG
  const menuLink = document.getElementById("menu-link");
  const sidebar = document.getElementById("ul-1");

  menuLink.addEventListener("click", (e) => {
    e.preventDefault(); // Stops the link from jumping the page
    sidebar.classList.toggle("open");
  });

  // Close the sidebar if a user clicks outside of it
  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !menuLink.contains(event.target)) {
      sidebar.classList.remove("open");
    }
  });
});
