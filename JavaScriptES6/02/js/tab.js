var that;
class Tab {
  constructor(id) {
    that = this;
    //获取元素,拿到 id 为tabbox的大盒子
    this.main = document.querySelector(id);
    //如下2行代码用于获取所有的section和li
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    this.add = this.main.querySelector(".tabbox__add");
    //删除功能
    this.remove = this.main.querySelectorAll(".tabbox__iconfont--guangbi");
    //得到li的父元素用于后面的新的tab,insertAdjacentHTML 方法添加
    this.ul = this.main.querySelector(".tabbox__nav ul:first-child");

    //section的父元素用于后面的新添加的文本内容
    this.fsection = this.main.querySelector(".tabbox__scon");

    this.init();
  }
  //用init做事件绑定
  init() {
    this.updateNode();
    this.add.onclick = this.addTab.bind(this.add, this);
    //init初始化操作让相关的元素绑定事件,同时给各个元素一个index
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      // this.lis[i].onclick=function(){
      //   console.log(this.index)
      // }
      this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
      this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
      this.spans[i].onclick = this.editTab;
      this.sections[i].onclick = this.editTab;
    }
  }
  //因为动态添加元素需要重新获取新的元素,所以需要把关闭按钮放入updateNode 里面
  updateNode() {
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    //删除功能, 不再construcotr里面获取,而是在updateNode里面获取.
    this.remove = this.main.querySelectorAll(".tabbox__iconfont--guangbi");
    //编辑span的名称选择span的第一个child
    this.spans = this.main.querySelectorAll(
      ".tabbox__nav ul li span:first-child"
    );
  }
  //1.切换功能
  toggleTab(that) {
    // console.log(this.index);
    that.clearClass();
    this.className = "liactive";
    that.sections[this.index].id = "sectionactive";
  }
  //清除所有li和section的类
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].id = "";
    }
  }
  //2 add function
  addTab(that) {
    that.clearClass();
    //1.创建li元素和section元素
    var random = Math.random();
    var li =
      '<li class="liactive"> <span>new Tab</span><span class="tabbox__iconfont tabbox__iconfont--guangbi"></span></li>';
    var section = ' <section id="sectionactive">test' + random + "</section>";
    //2. 把这两个元素追加到对应的父元素里面
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", section);
    //在添加了一个新的Tab后, 重新init(加载)li 和section.
    that.init();
  }

  //删除tab
  removeTab(that, e) {
    e.stopPropagation(); //阻止冒出0,1,2,因为作为li的index已经绑定了其他事件
    var index = this.parentNode.index;
    console.log(index);
    //remove方法可以直接删除制定元素
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();

    //当我们删除的不是选定li的时候, 原来的li处于选定状态
    //如果原本的li处于liactive状态则return,不执行下面的代码
    if (document.querySelector(".liactive")) return;
    //当我们删除了选中状态的li的时候,前一个li处于选定状态
    index--;
    //手动调用我们的点击事件,不要鼠标触发,&&是回调函数,如果前面为真,执行后面的,如果为假就不再调用了
    that.lis[index] && that.lis[index].click();
  }
  //3.editTab
  editTab() {
    var str = this.innerHTML;
    //双击禁止选定文字,用于后面的生成文本框的操作
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.getSelection.empty();
    //生成文本框

    this.innerHTML = '<input style="width:50px" type="text"/>';
    // console.log(11);
    //获取input第一个孩子的值
    var input = this.children[0];
    input.value = str;
    input.select(); //文本框里面的文字处于选定状态
    //当离开文本框,把文本框里面的值给span
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };
    //按下回车也可以吧文本框的值给span;
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        //手动调用表单失去焦点事件,不需要鼠标操作
        this.blur();
      }
    };
  }
}
var tab = new Tab("#tabbox");
