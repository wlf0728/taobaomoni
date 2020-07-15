<template>
    <div class="hello">
        <el-row class="title">
            <el-col :span="24">
                支付信息
            </el-col>
        </el-row>
        <el-row class="content">
            <el-form label-width="170px">
                <el-form-item label="付款方式" required>
                    <el-radio-group v-model="form.resource">
                        <el-radio label="一口价（普通交易模式）"></el-radio>
                        <el-radio label="预售模式"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="库存计数" required>
                    <el-radio-group v-model="form.resource">
                        <el-radio label="买家拍下减库存"></el-radio>
                        <el-radio label="买家付款减库存"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div class="buttonPannel">
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="save">保存</el-button>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'payMent',
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
        save() {
            let _this = this
            this.$refs.salesInfor.validate(valid => {
                if (valid) {
                    _this.$post(url.baseUrl + 'prod-api/supplierApp/info/add', _this.form).then(res => {
                        if (res.data.code == 200) {
                            _this.$message({
                                message: '保存成功',
                                type: 'success'
                            })
                            _this.getSuplierOption()
                            _this.supplierCancel()
                        } else {
                            _this.$message({
                                message: res.message,
                                type: 'error'
                            })
                        }
                    })
                }
            })
        },
        cancel() {
            this.$refs.form.resetFields()
        },
    }

}
</script>

<style scoped>
.buttonPannel {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.content {
    background-color: #fff;
    padding-top: 20px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
}

.title {
    padding: 10px;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgb(238, 238, 238);
}
</style>
