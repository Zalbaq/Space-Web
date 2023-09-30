export const getStarted = () => {
  const getStarted = document.getElementById("get-started");
  getStarted.addEventListener("click", () => {
    document.location.href = "#mercury";
  });
};
