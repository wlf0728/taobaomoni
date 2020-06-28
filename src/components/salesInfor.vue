<template>
  <div class="hello">
    <el-row style="with:100%">
      <el-col :span="24">
        <div style="width:100%;height:100%;background-color: #fafafa;">销售信息</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'salesInfor',
  data() {
    return {
    }
  },
  mounted() {

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
