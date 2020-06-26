<template>
  <div class="hello">
    钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){
    this.$get('http://epc.dian19.com:17888/monitorapi/monitorCameraCompany/primarylist',{}).then((res) =>{
      
    })
  }
}
</script>

<style scoped>

</style>
