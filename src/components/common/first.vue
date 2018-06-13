<template>
  <div class="first">
    <div class="firstBgBox" :class="{'firstBg':isTrans}"></div>
    <div class="title">
      <h1 :class="{'class-a':active,'class-b':!active}">我是Me，张扬自我</h1>
      <p class="subline" v-if="isShow">欢迎走进我的世界</p>
    </div>
    <a class="arrow" @click="arrow"></a>

  </div>
</template>
<script>
  export default {
    name: 'first',
    data(){
      return {
        isShow: false,
        active: false,
        isTrans: false
      }
    },
    methods: {
      arrow(){
        this.isShow = true;
        this.active = true;
        this.isTrans = true;
      }
    }
  }
</script>
<style>
  .first {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .firstBgBox {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/header-background.jpg") !important;
    background-size: cover;
    background-position-x: 50%;
  }

  .firstBg {
    background-size: cover;
    transition-duration: .5s;
    transform: translateY(-25%);
    opacity: .5;
  }

  .first .title {
    position: absolute;
    top: 43%;
    left: 0;
    right: 0;
  }

  .first .title h1 {
    font-size: 60px;
  }

  .first .title .subline {
    font-size: 30px;
    padding-top: 20px;
    color: #514753;
  }

  .class-a {
    color: #514753;
  }

  .class-b {
    color: #fff;
  }

  .arrow {
    position: absolute;
    left: 49%;
    bottom: 10%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
    cursor: pointer;
  }

  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }

  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }

</style>
