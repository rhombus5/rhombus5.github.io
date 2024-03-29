function showpage(button, newpage) {

  buttonid = button.id;

  allpages = document.getElementsByClassName("page show");

  for (let page of allpages) {
    document.getElementById(page.id).className = "page no-show";
  }
  document.getElementById(newpage).className = "page show";
}
