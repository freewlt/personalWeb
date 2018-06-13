<template>
  <div class="forth">
    <div class="intro">
      <h2 class="title">光的艺术</h2>
      <p>我爱摄影，尤其是壮美的自然风光。因为旅行，我爱上了摄影；也因为摄影，我更热爱旅行。</p>
      <a href="javascript:;" class="change" @click="change">
        <i class="icon-expand"></i>
        <span class="txt"> 换一换</span>
      </a>
    </div>
    <div class="montage">
      <a href="javascript:;" class="picBox" v-for="(item,index) in list" target="_blank" @click="picBox(item.id)"
         :data-id="item.id">
        <img :src="item.PicSrc" class="pic"/>
      </a>
    </div>
    <!-- 弹窗 -->
    <div class="modalBg" :class="{show:isShow}">
      <div class="modal">
        <span class="close" @click="close">×</span>
        <img :src="imgDataUrl" class="pic">
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: "forth",
    data(){
      return {
        list: [],
        isShow: false,
        imgDataUrl: '',
        showAll:false,
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
        Axios.get('./static/api.json').then((response) => {
          let a=response.data.list;
          this.list=a.slice(0, 12)
        })
      },
      //获取接口信息
      getData () {
        Axios.get('./static/api.json').then((response) => {
          let a=response.data.list;
          this.list=a.slice(5, 17)
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
      //关闭弹窗
      close(){
        this.isShow = false
      }
    },
  }
</script>
<style lang="less">
  @import "../../assets/css/sum";
  .forth {
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
