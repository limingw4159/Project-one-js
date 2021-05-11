window.addEventListener("load", function () {
  new Tab(".nav__right", ".mainhome", "#mainacitive");
});
var flag = true;
class Tab {
  constructor(tabName, mainName) {
    this.tab = document.querySelector(tabName);
    this.home = document.querySelectorAll(mainName);
    this.lis = this.tab.querySelectorAll("li");
    this.init();
  }

  init() {
    for (let i = 0; i < this.lis.length; i++) {
      //add a property named index for each li
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
      console.log(flag);
    }
  }
  toggleTab(that) {
    that.clearClass(this.index);
    this.className = "current";
    that.home[this.index].className = "mainhome mainacitive";
    if (this.index == 1 && flag == true) {
      flag = false;
      that.progBar(this.index, that);
    }

    // that.home[this.index].id = "asds";
  }
  clearClass(index) {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.home[i].className = "mainhome";
    }
    index != 1 ? (flag = true) : false;
  }
  progBar(index, that) {
    let arr = [80, 90, 70, 90, 80, 95];
    that.progress = that.home[index].querySelectorAll(".progressbar");
    for (let i = 0; i < that.progress.length; i++) {
      that.animate(that.progress[i], arr[i]);
    }
  }
  animate(obj, width) {
    let percent = 0;
    let timer = setInterval(function () {
      percent++;
      if (percent > width) {
        clearInterval(timer);
      }

      obj.setAttribute("style", "width:" + percent + "%");
    }, 10);
  }
}
