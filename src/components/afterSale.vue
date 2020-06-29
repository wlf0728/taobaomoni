<template>
    <div class="hello">
        <el-row class="title">
            <el-col :span="24">
                售后服务
            </el-col>
        </el-row>
        <el-row class="content">
            <el-form label-width="170px">
                <el-form-item label="售后服务:">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="提供发票" name="type"></el-checkbox><br/>
                        <el-checkbox label="保修服务" name="type"></el-checkbox><br/>
                        <el-checkbox label="退换承诺" name="type"></el-checkbox><br/>
                    </el-checkbox-group>
                    <div class="word1">凡使用支付宝服务付款购买本店商品，若存在质量问题或与描述不符，本店将主动提供退换货服务并承担来回邮费</div>
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="服务承诺：该类商品必须支持【七天退货】服务" name="type"></el-checkbox>
                    </el-checkbox-group>
                    <div class="word2">承诺更好服务可通过
                        <span style="color:rgb(128, 145, 225);">【交易合约】</span>设置</div>

                </el-form-item>
                <el-form-item label="上架时间">
                    <span class="word">定时上架的商品在上架前请到“仓库中的宝贝”里编辑商品</span><br/>
                    <el-radio-group v-model="form.resource">
                        <el-radio label="立即上架"></el-radio>
                        <el-radio label="定时上架"></el-radio>
                        <el-radio label="放入仓库"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'afterSale',
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
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
}

.word {
    color: rgb(146, 148, 161);
}

.title {
    padding: 10px;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgb(238, 238, 238);
}

.word1 {
    position: absolute;
    left: 95px;
    color: rgb(146, 148, 161);
    bottom: 50px;
}

.word2 {
    position: absolute;
    left: 335px;
    color: rgb(146, 148, 161);
    bottom: 5px;
}
</style>
