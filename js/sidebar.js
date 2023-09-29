export let sidebarControl = () => {
  const sidebar = document.getElementById("sidebar");
  const closeIcon = document.getElementById("close-icon");
  const listIcon = document.getElementById("list-menu");
  const link = [...sidebar.querySelectorAll("a")];

  closeIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar");
  });

  listIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar");
  });
  link.forEach((item) => {
    item.addEventListener("click", () => {
      sidebar.classList.toggle("open-sidebar");
    });
  });
};
