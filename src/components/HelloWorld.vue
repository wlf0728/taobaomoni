<template>
  <div class="hello">
<<<<<<< HEAD
    <el-row style="with:100%">
      <el-col :span="6">
        <div style="width:100%;height:100%"> </div>
      </el-col>
      <el-col :span="12">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="first">基础信息</el-tab-pane>
          <el-tab-pane label="销售信息" name="second">销售信息</el-tab-pane>
          <el-tab-pane label="图文描述" name="third">图文描述</el-tab-pane>
          <el-tab-pane label="支付信息" name="fourth">支付信息</el-tab-pane>
          <el-tab-pane label="物流信息" name="fifth">物流信息</el-tab-pane>
          <el-tab-pane label="售后服务" name="sixth">售后服务</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6">
        <div style="width:100%;height:100%"></div>
      </el-col>
    </el-row>
=======
    钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱223333
>>>>>>> 49c4909ef704d1d367cfd53dd56d7048d976e4c8
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

</style>
