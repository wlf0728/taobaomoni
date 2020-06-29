<template>
    <div class="hello">
        <el-row class="title">
            <el-col :span="24">
                 图文描述
            </el-col>
        </el-row>
        <el-row class="content">
            
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'logiStics',
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
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
    margin-top: 20px;
}

.title {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>
