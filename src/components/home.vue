<template>
  <div class="home">
    <a href="javascript:;" class="fullScreen" @click="fullScreen"> <i class="icon-expand"></i><span
      class="txt"> 全屏浏览</span></a>
    <page :currentPage="currentPage" class="first">
      <section class="animate">
        <headline></headline>
      </section>
    </page>
    <page :currentPage="currentPage" class="second">
      <section class="animate">
        <product></product>
      </section>
    </page>
    <page :currentPage="currentPage">
      <section class="animate move-left">
        <travel></travel>
      </section>
    </page>
    <page :currentPage="currentPage">
      <h1 class="text-center">方法说明</h1>
      <section class="animate move-left">
        <p>在每个options的对象中，可以设置两种方法：beforeLeave 和 afterEnter</p>
        <ul>
          <li>beforeLeave 方法表示在离开当前页面前所做的操作</li>
          <li>afterEnter 方法表示在进入当前页面后所做的操作</li>
        </ul>
        <p>这两个方法都有一个默认参数，该参数为当前Page的vue组件实例，方法的this为App.vue的组件实例</p>
      </section>
    </page>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage"
                     :option="controllerOption"></page-controller>
  </div>
</template>

<script>
  import Page from './fullpage/Page.vue';
  import PageController from './fullpage/PageController.vue';
  import Headline from "./fullpage/headline";
  import Product from "./fullpage/product";
  import Travel from "./fullpage/travel";

  // 页面进出动画
  function afterEnterAnimate($child) {
    $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right');
  }
  function beforeLeaveAnimate($child) {
    let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right';
    $child.$el.querySelector('.animate').classList.add(moveType);
  }

  export default {
    name: 'home',
    data() {
      return {
        currentPage: 1,
        options: [{
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        }, {
          background: 'rgba(255, 255, 255, 1)',
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        }, {
          background: 'rgba(0, 255, 255, 1)',
          isCenter: true,
        }, {
          background: 'rgba(46, 153, 229, 1)',
          color: '#fff',
          isCenter: true,
        }],
        controllerOption: {
          arrowsType: false,
          navbar: true,
          highlight: true,
          loop: false
        }
      }
    },
    computed: {
      // 总page数
      pageNum() {
        return this.options.length;
      }
    },
    methods: {
      //全屏显示
      fullScreen(elem){
        elem = document.body;
        if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.requestFullScreen) {
          elem.requestFullscreen();
        } else {
          //浏览器不支持全屏API或已被禁用
        }
      },
      changePage(index) {
        // beforeLeave Hook
        let beforeIndex = this.currentPage - 1;
        let leaveFunction = this.options[beforeIndex].beforeLeave;
        typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
        // change page
        this.currentPage = index;
        // afterEnter Hook
        let nextIndex = index - 1;
        let enterFunction = this.options[nextIndex].afterEnter;
        this.$nextTick(function () {
          typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
        })
      }
    },
    components: {
      Travel, Product, Headline, Page, PageController
    },
    mounted() {
      this.$children.forEach((child, index) => {
        // 动态设置各个page内的options
        if (child.option === null) {
          let childOption = this.options[index];
          this.$set(childOption, 'index', index + 1);
          child.option = childOption;
        }
      });
    }
  }
</script>

<style scoped>
  @import "../assets/css/home.css";
</style>
