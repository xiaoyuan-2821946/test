'use strict';

/* 中间搜索框*/
exports.searchRandom = function () {
  (function () {
    // 拿到搜索框
    var form = document.getElementsByClassName('form')[0];
    // 拿到form中的框
    var text = form.getElementsByClassName('text')[0];
    // 定义随机数
    var arr = ['欧米茄', '行车记录仪高清', '5G好物盛典', '路由器', '地球仪', '爱普生打印机', '云南白药牙膏', '格力变频空调', '澳柯玛冰柜', '好孩子婴儿推车'];
    // 定义计时器
    var timer = null;
    // 定义一个funcgtion
    function start() {
      timer = setInterval(function () {
        // 开启随机数
        var target = parseInt(Math.random() * arr.length);
        // 改变搜索框中的内容
        text.setAttribute('placeholder', arr[target]);
      }, 4000);
    }
    // 当搜索框点击的时候停止定时器
    text.onclick = function (event) {
      // 阻止默认事件
      event.stopPropagation();
      // 停止定时器
      clearInterval(timer);
    };
    // 当text离开的时候给body添加点击事件
    text.onmouseleave = function () {
      // 给body添加点击事件
      document.getElementsByTagName('body')[0].onclick = function (event) {
        // 阻止默认事件
        event.stopPropagation();
        // 因为定时器会有累计效果,所以要先清除累加器
        clearInterval(timer);
        start();
      };
    };
    start();
  })();
};
/*导出导航栏在东西*/
exports.navBtnRandom = function () {
  // 拿到style-red元素
  var styleRed = document.getElementById('specHotWord');
  // 定时器的标记
  var timer = null;
  // 定义一个定时器方法
  function start() {
    timer = setInterval(function () {
      if (styleRed.innerText === '阅读伴成长') {
        // 改变文本
        styleRed.innerText = '家电超级五';
      } else {
        styleRed.innerText = '阅读伴成长';
      }
    }, 2000);
  }
  // 当styleRed移入的时候
  styleRed.onmouseover = function () {
    // 停止定时器
    clearInterval(timer);
  };
  // 当styleRed移出的时候
  styleRed.onmouseleave = function () {
    // 重新开启定时器
    clearInterval(timer);
    start();
  };
  start();
};
exports.setHeader = function () {
  (function () {
    // 获取搜索框
    var search = document.getElementById('search');
    // 拿到search-logo中的元素
    var searchLogo = document.getElementsByClassName('search-logo')[0];
    // 拿到feed-tab-wrapper元素
    var feedTabWrapper = document.getElementsByClassName('feed-tab-wrapper')[0];
    //获得页面向上卷动的距离
    function getScroll() {
      return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      };
    }
    window.onscroll = function () {
      if (getScroll().top >= 500) {
        // 设置search的class
        search.setAttribute('class', 'search-fix');
        searchLogo.style.display = 'block';
      } else {
        // 删除search的class
        search.removeAttribute('class');
        searchLogo.style.display = 'none';
      }
      // 如果页面大于3100 设置feedTabWrapper的样式
      if (getScroll().top > 3100) {
        feedTabWrapper.setAttribute('class', 'grid_c1 feed-tab-wrapper feed-tab-wrapper--fixed');
      } else if (getScroll().top <= 3050) {
        feedTabWrapper.setAttribute('class', 'grid_c1 feed-tab-wrapper');
      }
    };
  })();
};