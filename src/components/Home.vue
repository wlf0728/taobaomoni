<template>
  <div class="hello">
    <el-row>
      <el-col :span="14" class="content" :offset="5">
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
      <el-col :span="14" class="content" :offset="5">
        <sales-infor v-if="activeName == 2"></sales-infor>
        <pay-ment v-if="activeName == 4"></pay-ment>
        <logi-stics v-if="activeName == 5"></logi-stics>
        <after-sale v-if="activeName == 6"></after-sale>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import afterSale from './afterSale.vue'
import logiStics from './logiStics.vue'
import payMent from './payMent.vue'
import salesInfor from './salesInfor.vue'

export default {
  name: 'HelloWorld',
  components: {
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
.content {
  background-color: #fff;
  padding: 0 10px;
}
.tabPannel{
  width: 100%;
  height: 43px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
}
.active{
  height: 42px;
  padding: 0 20px;
  line-height: 42px;
  color: #409EFF;
  cursor: pointer;
  border-top: 2px solid #409EFF;
  background-color: rgb(242, 243, 247);
  margin-bottom: -2px;
}
.notactive{
  height: 42px;
  padding: 0 20px;
  line-height: 42px;
  cursor: pointer;
  border-top: #fff 2px solid;
  margin-bottom: -2px;
}
.notactive:hover{
  color: #409EFF;
}
</style>
