<template>
    <div class="hello">
        <div class="catogary">
            <span class="catogaryText">当前类目：孕妇装/孕产妇用品/营养>>待产用品>>护腰枕</span><div class="changeCatagory">切换类目</div>
        </div>
        <div class="basicPanel">
            <div class="title">基础信息</div>
            <div class="content">
                <el-form label-width="170px">
                    <el-form-item label="宝贝类型" required>
                         <el-radio-group v-model="value">
                            <el-radio :label="3">全新</el-radio>
                            <el-radio :label="6">二手</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="宝贝标题" required>
                        <el-input type="text" placeholder="请输入内容" v-model="value" maxlength="60" show-word-limit style="width:75%">
                        </el-input>
                        <div class="tips">标题和描述关键词是否违规自检工具：<span class="blueTip">商品合规工具</span></div>
                    </el-form-item>
                    <el-form-item label="类目属性">
                        <div class="tips">错误填写宝贝属性，可能会引起宝贝下架或者搜索量减少，影响您的正常销售，请认真准确填写！</div>
                        <div class="innerFormArea">
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="品牌" required>
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                        <div class="tips">未找到需要的品牌，<span class="blueTip">点击申请</span></div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="是否可拆洗">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="型号" required>
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="尺码">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="产地">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="适用阶段">
                                        <span class="tips">当前最多只能设置3个值</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="商品条形码">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="货号">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-form-item>
                    <el-form-item label="采购地" required>
                        <el-radio-group v-model="value">
                            <el-radio :label="3">国内</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
            <div class="bottom">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'basicInfo',
    data() {
        return {
            value:''
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
.catogaryText{
    margin-left: 20px;
}
.basicPanel{
    width: 100%;
    margin-top: 20px;
    background: #fff;
    box-shadow:0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
}
.title{
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
}
.content{
    padding-top: 20px;
    border-top: 1px solid rgb(238, 238, 238);
}
.innerFormArea{
    width: 90%;
    padding: 20px 50px 20px 0;
    background-color: rgb(252, 252, 252);
    border: 1px solid rgb(238, 238, 238);
}
.marginBottom{
    margin-bottom: 22px;
}
.allWidth{
    width: 100%;
}
.tips{
    color:rgb(146,148,161);
}
.blueTip{
    color:rgb(128, 145, 225)
}
</style>
