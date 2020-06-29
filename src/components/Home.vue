<template>
  <div class="hello">
    <el-row>
      <el-col :span="14" :offset="5">
        <div class="tabPannel">
          <div :class="activeTab == 1?'active':'notactive'" @click="activeTab = 1">
            基础信息
          </div>
          <div :class="activeTab == 2?'active':'notactive'" @click="activeTab = 2">
            销售信息
          </div>
          <div :class="activeTab == 3?'active':'notactive'" @click="activeTab = 3">
            图文描述
          </div>
          <div :class="activeTab == 4?'active':'notactive'" @click="activeTab = 4">
            支付信息
          </div>
          <div :class="activeTab == 5?'active':'notactive'" @click="activeTab = 5">
            物流信息
          </div>
          <div :class="activeTab == 6?'active':'notactive'" @click="activeTab = 6">
            售后服务
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :offset="5">
        <basicInfo v-if="activeTab == 1"></basicInfo>
        <sales-infor v-if="activeTab == 2"></sales-infor>
        <videoInfo v-if="activeTab == 3"></videoInfo>
        <pay-ment v-if="activeTab == 4"></pay-ment>
        <logi-stics v-if="activeTab == 5"></logi-stics>
        <after-sale v-if="activeTab == 6"></after-sale>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import basicInfo from './basicInfo'
import videoInfo from './videoInfo'
import afterSale from './afterSale.vue'
import logiStics from './logiStics.vue'
import payMent from './payMent.vue'
import salesInfor from './salesInfor.vue'

export default {
  name: 'HelloWorld',
  components: {
    basicInfo,
    videoInfo,
    afterSale,
    logiStics,
    payMent,
    salesInfor
  },
  data() {
    return {
      activeTab: 1
    }
  },
  mounted() {
    this.$get('http://epc.dian19.com:17888/monitorapi/monitorCameraCompany/primarylist', {}).then((res) => {

    })
  },
  methods: {
    
  }

}
</script>

<style scoped>
.tabPannel{
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  box-shadow:0px 2px 8px 0px rgba(0, 0, 0, 0.1);
}
.active{
  height: 48px;
  padding: 0 20px;
  line-height: 48px;
  color: #409EFF;
  cursor: pointer;
  border-top: 2px solid #409EFF;
  background-color: rgb(242, 243, 247);
  margin-bottom: -2px;
}
.notactive{
  height: 48px;
  padding: 0 20px;
  line-height: 48px;
  cursor: pointer;
  border-top: #fff 2px solid;
  margin-bottom: -2px;
}
.notactive:hover{
  color: #409EFF;
}
</style>
<style>
::-webkit-scrollbar{
  width:0px;
  height:0px;
}
::-webkit-scrollbar-track{
  background: transparent;
  opacity:0;
  border-radius:3px;
}
::-webkit-scrollbar-thumb{
background: transparent;
border-radius:3px;
}
::-webkit-scrollbar-thumb:hover{
background: transparent;
border-radius:3px;
}
::-webkit-scrollbar-corner {
background: transparent;
}
.uni-swiper-wrapper{
  overflow-y: scroll!important;
}
</style>
