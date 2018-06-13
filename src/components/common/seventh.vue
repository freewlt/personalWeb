<template>
  <div class="seventh">
    <div class="intro">
      <h2 class="title">{{sevenTitle}}</h2>
      <p>{{firstWord}}</p>
      <p>{{secondWord}}</p>
    </div>
    <div class="uniform">
      <h3 class="title">这个网站的早期版本</h3>
      <div class="mainBox">
        <div class="lf">
          <div class="tour" v-for="item in list">
            <span class="time">{{item.time}}</span>
            <img :src="item.PicSrc" class="pic">
          </div>
        </div>
        <div class="rt">
          <div class="tour" v-for="item in tour">
            <img :src="item.PicSrc" class="pic">
            <span class="time">{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    name: 'seventh',
    data(){
      return {
        list: [],
        sevenTitle: '',
        firstWord: '',
        secondWord: '',
        tour: []
      }
    },
    mounted(){
      Axios.get('./static/api.json').then((response) => {
        this.sevenTitle = response.data.sevenTitle;
        this.firstWord = response.data.firstWord;
        this.secondWord = response.data.secondWord;
        let a = response.data.list;
        this.list = a.slice(2, 4)
        let b = response.data.tour;
        this.tour = b.slice(5, 8)
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/css/sum";

  .picBox {
    clear: both;
    padding: 60px 0;
    .pic {
      display: inline-block;
      vertical-align: middle;
      width: 42%;
      padding: 0 4% 0 2%;
    }
  }

  .uniform {
    .title {
      padding: 50px 0 20px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
    }
    .mainBox {
      clear: both;
      width: 50%;
      margin: 0 auto;
      .tour {
        padding: 20px 0;
        .time {
          display: inline-block;
          vertical-align: middle;
          width: 10%;
          padding-right: 5%;
        }
        .pic {
          display: inline-block;
          vertical-align: middle;
          width: 83%;
          cursor: pointer;
          -webkit-transition: all 1s;
          -moz-transition: all 1s;
          -o-transition: all 1s;
          &:hover {
            opacity: .8;
            transform: scale(1.1);
          }
        }
        &:hover {
          color: red;
        }
      }
      .lf {
        display: inline-block;
        vertical-align: middle;
        width: 50%;
      }
      .rt {
        display: inline-block;
        vertical-align: middle;
        width: 48%;
        .tour {
          padding: 10px 0;
          .pic {
            width: 57%;
          }
          .time {
            padding: 0 0 0 5%;
          }
        }
      }
    }
  }
</style>
