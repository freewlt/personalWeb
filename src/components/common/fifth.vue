<template>
  <div class="fifth">
    <div class="intro">
      <h2 class="title">光的艺术</h2>
      <p>我爱摄影，尤其是壮美的自然风光。因为旅行，我爱上了摄影；也因为摄影，我更热爱旅行。</p>
      <a href="javascript:;" class="change" @click="change">
        <i class="icon-expand"></i>
        <span class="txt"> 换一换</span>
      </a>
    </div>
    <div class="montage">
      <a href="javascript:;" class="picBox" v-for="(item,index) in list"  @click="picBox(item.id)" :data-id="item.id">
        <img :src="item.PicSrc" class="pic"/>
      </a>
    </div>
    <align :isShow="isShow"></align>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Align from "./align";
  export default {
    components: {Align}, name: "fifth",
    data(){
      return {
        list: [],
        isShow: false,
      }
    },
    mounted(){
      this.getData();
      //过滤数据逻辑
      this.findData = (list, key, id) => {
        for (let i = 0; i < list.length; i++) {
          if (list[i][key] == id) {
            return list[i]
          }
        }
        return {}
      }
    },
    methods: {
      change(){

      },
      //获取接口信息
      getData () {
        Axios.get('./static/api.json').then((response) => {
          this.list = response.data.list
        })
//        const _this = this;
//        Axios.get('./static/api.json')
//          .then(function(response) {
//            console.log(this,'这个是这个函数this', _this,'这个是执行vue对象this');
//            console.log(response.data.list);
//            _this.list = response.data.list;
//          })
//          .catch(function (error) {
//            console.log(error);
//          })

      },
      //点击显示模态框
      picBox(id){
        this.isShow = true;
        let obj = this.findData(this.list, 'id', id);
        this.imgDataUrl = obj.PicSrc;
      },
    }
  }
</script>
<style lang="less">
  .fifth {
    .intro {
      width: 55%;
      margin: 0 auto;
      color: #514753;
      font-size: 30px;
      text-align: left;
      .title {
        color: #514753;
        font-size: 50px;
      }
      p {
        padding-top: 40px;
        color: #514753;
        font-size: 30px;
      }
      .change {
        display: block;
        outline: 0;
        color: #cf4a5c;
        text-decoration: none;
        transition: color .25s ease-in-out;
        padding: 40px 0;
        .txt {
          display: inline-block;
          vertical-align: middle;
          padding-left: 5px;
          font-size: 20px;
        }
        .icon-expand {
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          background: url("../../assets/images/change.png");
          background-size: 100% 100%;
        }
        &:hover {
          color: #000;
          .icon-expand {
            width: 18px;
            height: 18px;
            background: url("../../assets/images/changeActive.png");
            background-size: 100% 100%;
          }
        }
      }
    }
    .montage {
      width: 100%;
      padding-bottom: 80px;
      .picBox {
        width: 24%;
        .pic {
          width: 15%;
          margin: .5%;
          cursor: pointer;
        }
        &:hover {
          opacity: .7;
        }
      }
    }

  }


</style>
