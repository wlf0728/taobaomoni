<template>
    <div class="hello">
        <el-row class="title">
            <el-col :span="24">
                物流信息
            </el-col>
        </el-row>
        <el-row class="content">
            <el-form label-width="170px">
                <el-form-item label="提取方式:" required>
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="使用物流配送" name="type"></el-checkbox>
                        <span>为了提升消费者购物体验，淘宝要求全网商品设置运费模板，如何使用模板，查看视频教程</span><br/>
                        <span>使用官方寄件，一键发货，全程保障</span><br/>
                        <el-checkbox label="电子交易凭证" name="type"></el-checkbox>
                        <span>您未开通电子凭证，申请开通了解详情</span><br/>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
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
    padding-top: 20px;
}

.title {
    padding: 10px;
    margin-top: 20px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}
</style>
