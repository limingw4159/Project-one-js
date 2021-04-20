window.addEventListener("load", function () {
  new Tab(".nav__right", ".mainhome", "#mainacitive");
});

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
    }
  }
  toggleTab(that) {
    that.clearClass();
    this.className = "current";
    that.home[this.index].className = "mainhome mainacitive";
    that.progBar(this.index, that);

    // that.home[this.index].id = "asds";
  }
  clearClass() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.home[i].className = "mainhome";
    }
  }
  progBar(index, that) {
    if (index == 1) {
      that.progress = that.home[index].querySelectorAll(".progressbar");
      for (let i = 0; i < that.progress.length; i++) {
        switch (i) {
          case 0:
            that.animate(that.progress[i], 80);
            break;
          case 1:
            that.animate(that.progress[i], 90);
            break;
          case 2:
            that.animate(that.progress[i], 70);
            break;
          case 3:
            that.animate(that.progress[i], 90);
            break;
          case 4:
            that.animate(that.progress[i], 80);
            break;
          case 5:
            that.animate(that.progress[i], 95);
            break;
        }
      }
    } else {
      return false;
    }
  }
  animate(obj, width) {
    let percent = 0;
    let timer = setInterval(function () {
      percent++;
      if (percent >= width) {
        clearInterval(timer);
      }
      obj.setAttribute("style", "width:" + percent + "%");
    }, 10);
  }
}
