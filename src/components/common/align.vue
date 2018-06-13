<template>
  <div class="align">
    <div class="modalBg" :class="{show:isShow}">
      <div class="modal">
        <span class="close" @click="close">×</span>
        <!--<img :src="'./static/images/'+ item.PicSrc" class="pic">-->
        <img :src="imgDataUrl" class="pic">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'align',
    data(){
      return {
      }
    },
    props: ['isShow','imgDataUrl'],
    methods: {
      //关闭弹窗
      close(){
        this.isShow = false
      }
    }
  }
</script>
<style lang="less">
  /* 弹窗 */
  .modalBg {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    .modal {
      background: white;
      width: 35%;
      position: absolute;
      left: 40%;
      top: 50%;
      margin-left: -190px;
      margin-top: -300px;
      text-align: center;
      .close {
        position: absolute;
        right: 20px;
        top: -10px;
        font-size: 48px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        z-index: 99;
        color: #FFF;
      }
      .pic {
        width: 96%;
        padding: 8px 0;
      }
    }
  }

  .show {
    display: block;
  }
</style>
