<template>
  <div class="sixth">
    <div class="intro">
      <h2 class="title">我爱设计</h2>
      <p>我设计各种各样的东西，从平面设计到室内，再到用户界面和网页设计。</p>
      <p>我很喜欢把我的创造性发挥到极限，更享受从无到有、渐渐完美的设计过程。我爱设计，也相信它会让生活更美好。</p>
      <div class="picBox">
        <img :src="item.PicSrc" class="pic"  v-for="item in list">
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    name: 'sixth',
    data(){
      return {
          list:[]
      }
    },
    mounted(){
      Axios.get('./static/api.json').then((response) => {
        let a=response.data.list;
        this.list=a.slice(0, 2)
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/css/sum";
  .picBox{
    clear: both;
    padding:60px 0;
    .pic{
      display: inline-block;
      vertical-align: middle;
      width:42%;
      padding:0 4% 0 2%;
    }
  }
</style>
