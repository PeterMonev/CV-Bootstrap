const scrollTopBtn = document.getElementById("btn-scrollTop");

window.onscroll = () => {  
    document.documentElement.scrollTop > 200 ? scrollTopBtn.style.display = "block" :  scrollTopBtn.style.display = "none"
};

scrollTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
