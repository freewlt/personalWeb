<template>
  <div class="eighth">
    <div class="container">
      <h2 class="title">打个招呼吧</h2>
      <p class="txt">我很期待与大家的交流。可以发送邮件到
          <a href="javascript:;" v-clipboard:copy="address"
             v-clipboard:success="onCopy"
             v-clipboard:error="onError">{{address}}</a>
      </p>
      <h3 class="attention">你也可以在这些社交网络上关注我</h3>
      <div class="attentionBox">
        <a class="type" href="https://github.com/freewlt">
          <img src="./../../../static/images/github.png" class="pic">
        </a>
        <a class="type" href="javascript:;">
          <img src="./../../../static/images/wx.png" class="pic">
        </a>
        <a class="type" href="javascript:;">
          <img src="./../../../static/images/wb.png" class="pic">
        </a>
        <a class="type" href="javascript:;">
          <img src="./../../../static/images/wy.png" class="pic">
        </a>
      </div>
    </div>
    <div>
      <p>Refer to the website: http://www.dandyweng.com/</p>
      <p>Copyright © 2018 .</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'eighth',
    data(){
      return {
          address:"wangliting@163.com"
      }
    },
    methods:{
      onCopy: function (e) {
        console.log('你刚刚复制: ' + e.text)
      },
      onError: function (e) {
        console.log('无法复制文本！')
      }
    }

  }
</script>

<style lang="less" scoped>
  .eighth {
    background-image: url(./../../../static/images/bg.jpg);
    background-size: 100%;
    background-size: cover;
    padding-top: 3.5em;
    padding-bottom: 2.5em;
    .container {
      width: 56%;
      margin: 0 auto;
      text-align: left;
      color: #69606b;
      .title {
        font-size: 50px;
        padding-bottom: 30px;
      }
      .txt {
        font-size: 30px;
        line-height: 45px;
        a{
          display: block;
          text-align: center;
          padding-top:20px;
        }
      }
      .attention{
        padding-top:20px;
        font-size:26px;
        text-align: center;
      }
      .attentionBox{
        text-align: center;
        .type{
          display: inline-block;
          vertical-align: middle;
          padding:50px  50px;
            &:hover{
              transform:scale(1.3)
            }

        }
      }
    }
  }
</style>
