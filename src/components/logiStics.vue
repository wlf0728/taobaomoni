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
                    <el-checkbox-group v-model="form.type" size="medium">
                        <el-checkbox label="使用物流配送" name="type"></el-checkbox>
                    </el-checkbox-group>
                    <div class="words">为了提升消费者购物体验，淘宝要求全网商品设置运费模板，如何
                        <span style="color:rgb(128, 145, 225);">使用模板</span>，查看
                        <span style="color:rgb(128, 145, 225);">视频教程</span>
                    </div>
                    <span style="color: rgb(146, 148, 161);">使用官方寄件，一键发货，全程保障,
                        <span style="color:rgb(128, 145, 225);">详情查看</span>
                    </span><br/>
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="电子交易凭证" name="type"></el-checkbox>
                    </el-checkbox-group>
                    <span style="color: rgb(146, 148, 161);">您未开通电子凭证，
                        <span style="color:rgb(128, 145, 225);">申请开通了解详情</span>
                    </span><br/>

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

.el-form-item__content {
    line-height: 25px!important;
    position: relative;
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

.words {
    position: absolute;
    left: 122px;
    color: rgb(146, 148, 161);
    top: 0;
}
</style>
