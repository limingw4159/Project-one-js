window.onload = function () {
  var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号码的正则表达式
  var regqq = /^[1-9]\d{4,}$/; //1到9至少4位数
  var regnc = /^[/u4e00-\u9fa5]{2,8}$/; //中文汉字位于2到8
  var regmsg = /^\d{6}$/;
  var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
  var tel = document.querySelector("#tel"); //获取电话元素
  var qq = document.querySelector("#qq");
  var nc = document.querySelector("#nc");
  var msg = document.querySelector("#msg");
  var pwd = document.querySelector("#pwd");
  var surepwd = document.querySelector("#surepwd");
  regexp(tel, regtel); //验证手机号码
  regexp(qq, regqq); //验证qq
  regexp(nc, regnc); //验证昵称
  regexp(msg, regmsg); //短信验证
  regexp(pwd, regpwd);

  function regexp(ele, reg) {
    //2个参数:第一个是传递的元素,第二个用什么正则表达式
    ele.onblur = function () {
      if (reg.test(this.value)) {
        this.nextElementSibling.className = "success";
        this.nextElementSibling.innerHTML =
          '<i class="success_icon"></i>恭喜输入正确';
      } else {
        this.nextElementSibling.className = "error";
        this.nextElementSibling.innerHTML =
          '<i class="success_icon"></i>恭喜输入错误';
      }
    };
  }
  surepwd.onblur = function () {
    if (this.value == pwd.value) {
      this.nextElementSibling.className = "success";
      this.nextElementSibling.innerHTML =
        '<i class="success_icon"></i>恭喜您输入正确';
    } else {
      this.nextElementSibling.className = "error";
      this.nextElementSibling.innerHTML =
        '<i class="success_icon"></i>两次密码输入不一致';
    }
  };
};
