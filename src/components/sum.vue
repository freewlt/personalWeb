<template>
  <div class="sum">
    <a href="javascript:;" class="fullScreen" @click="fullScreen">
      <i class="icon-expand"></i>
      <span class="txt"> 全屏浏览</span>
    </a>
    <h2>{{$t('login')}}</h2>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>
    <first></first>
    <second></second>
    <third></third>
    <forth></forth>
    <sixth></sixth>
    <seventh></seventh>
    <eighth></eighth>
  </div>
</template>
<script>
  import First from "./common/first";
  import Second from "./common/second";
  import Third from "./common/third";
  import Forth from "./common/forth";
  import Sixth from "./common/sixth";
  import Seventh from "./common/seventh";
  import Eighth from "./common/eighth";
  export default {
    components: {Eighth, Seventh, Sixth, Forth, Third, Second, First}, name: 'sum',
    data(){
      return {}
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
      changeLocale (){
        this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
          confirmButtonText: this.$t('button.ok'),
          cancelButtonText: this.$t('button.cancel'),
          type: 'warning'
        }).then(() => {
          let locale = this.$i18n.locale
          locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        }).catch(() => {
          this.$message({
            type: 'info',
          })
        })
        this.$i18n.locale = 'en'
        window.localStorage.setItem('language', 'en')
      }
    }
  }
</script>
<style lang="less">
  /*//全屏按钮*/
  .fullScreen {
    position: absolute;
    top: 20px;
    left: 2%;
    z-index: 99;
    text-decoration: none;
    color: #333;
    .txt {
      display: inline-block;
      vertical-align: middle;
      padding-left: 5px;
    }
    .icon-expand {
      display: inline-block;
      vertical-align: middle;
      width: 18px;
      height: 18px;
      background: url("../assets/images/fullscreen.png");
      background-size: 100% 100%;
    }
  }
</style>
