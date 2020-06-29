<template>
    <div class="hello">
        <div class="catogary">
            当前类目：孕妇装/孕产妇用品/营养>>待产用品>>护腰枕<div class="changeCatagory">切换类目</div>
        </div>
        <el-row class="content">
            <el-col :span="22">
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'basicInfo',
    data() {
        return {
            
        }
    },
    mounted() {

    },
    methods: {
        

    }

}
</script>

<style scoped>
.catogary{
    width: 100%;
    height: 60px;
    margin-top: 20px;
    background-color: #fff;
    line-height: 60px;
    box-shadow:0px 2px 8px 0px rgba(0, 0, 0, 0.1);
}
.changeCatagory{
    padding: 0 25px;
    height: 37px;
    display: inline-block;
    margin-left: 20px;
    text-align: center;
    line-height: 37px;
    color:rgb(0, 133, 215);
    background: rgb(228, 240, 253);
    border-radius: 4px;
    border: 1px solid rgb(0, 133, 215);
    cursor: pointer;
}
.content {
    background-color: #fff;
    margin-top: 20px;
    
}

.title {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>
