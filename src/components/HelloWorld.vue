<template>
  <div class="hello">
    <el-row style="with:100%">
      <el-col :span="6">
        <div style="width:100%;height:100%;background-color: #fafafa;">&nbsp</div>
      </el-col>
      <el-col :span="12" class="content">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="first"></el-tab-pane>
          <el-tab-pane label="销售信息" name="second">
            <sales-infor></sales-infor>
          </el-tab-pane>
          <el-tab-pane label="图文描述" name="third"></el-tab-pane>
          <el-tab-pane label="支付信息" name="fourth">
            <pay-ment></pay-ment>
          </el-tab-pane>
          <el-tab-pane label="物流信息" name="fifth">
            <logi-stics></logi-stics>
          </el-tab-pane>
          <el-tab-pane label="售后服务" name="sixth">
            <after-sale></after-sale>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6">
        <div style="width:100%;height:100%"></div>
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
      activeName: 'first'
    }
  },
  mounted() {
    this.$get('http://epc.dian19.com:17888/monitorapi/monitorCameraCompany/primarylist', {}).then((res) => {

    })
  },
  methods: {
    handleClick: function(tab, event) {
      console.log(tab, event);
    },

  }

}
</script>

<style scoped>
.content {
  background-color: #fff;
  padding: 0 10px;
}
</style>
