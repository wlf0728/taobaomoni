<template>
    <div class="hello">
        <div class="catogary">
            <span class="catogaryText">当前类目：孕妇装/孕产妇用品/营养>>待产用品>>护腰枕</span><div class="changeCatagory">切换类目</div>
        </div>
        <div class="basicPanel">
            <div class="title">基础信息</div>
            <div class="content">
                <el-form label-width="170px">
                    <el-form-item label="商品名称" required>
                        <el-input type="text" placeholder="请输入商品名称" v-model="basicParam.productName" maxlength="60" show-word-limit style="width:75%">
                        </el-input>
                        <div class="tips">标题和描述关键词是否违规自检工具：<span class="blueTip">商品合规工具</span></div>
                    </el-form-item>
                    <el-form-item label="类目属性">
                        <div class="tips">错误填写宝贝属性，可能会引起宝贝下架或者搜索量减少，影响您的正常销售，请认真准确填写！</div>
                        <div class="innerFormArea">
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="品牌" required>
                                        <el-select v-model="basicParam.brandId" placeholder="请选择品牌" class="allWidth">
                                            <el-option v-for="item in brandOption" :key="item.brandId" :label="item.brandName" :value="item.brandId"></el-option>
                                        </el-select>
                                        <div class="tips">未找到需要的品牌，<span class="blueTip" @click="brandDialogVisible = true">点击申请</span></div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="供应商">
                                        <el-select v-model="basicParam.supplierId" placeholder="请选择供应商" class="allWidth">
                                            <el-option v-for="item in supplierOption" :key="item.supplierId" :label="item.supplierName" :value="item.supplierId"></el-option>
                                        </el-select>
                                        <div class="tips">未找到需要的供应商，<span class="blueTip" @click="suplierDialogVisible = true">点击添加</span></div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="一级分类" required>
                                        <el-select v-model="basicParam.oneCategoryId" placeholder="请选择一级分类" class="allWidth" @change="getSecondCator">
                                            <el-option v-for="item in firstCatorOption" :key="item.oneCategoryId" :label="item.name" :value="item.oneCategoryId"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="二级分类">
                                        <el-select v-model="basicParam.twoCategoryId" placeholder="请选择二级分类" class="allWidth">
                                            <el-option v-for="item in secondCatorOption" :key="item.supplierId" :label="item.name" :value="item.supplierId"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="三级分类">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="国条码">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <!-- <el-col :span="12">
                                    <el-form-item label="适用阶段">
                                        <span class="tips">当前最多只能设置3个值</span>
                                    </el-form-item>
                                </el-col> -->
                            </el-row>
                            <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="国条码">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <!-- <el-row class="marginBottom">
                                <el-col :span="12">
                                    <el-form-item label="货号">
                                        <el-select v-model="value" placeholder="请选择" class="allWidth">
                                            <el-option label="item.label" value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row> -->
                        </div>
                    </el-form-item>
                    <!-- <el-form-item label="采购地" required>
                        <el-radio-group v-model="value">
                            <el-radio :label="3">国内</el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                </el-form>
            </div>
            <div class="bottom">

            </div>
        </div>
        <el-dialog :visible.sync="brandDialogVisible" width="30%" title="添加品牌" @close="brandCancel">
            <div class="dialogContent">
                <el-form label-width="100px" :model="brandParam" :rules="rules" ref="brandParam">
                    <el-form-item label="品牌名称" prop="brandName">
                        <el-input type="text" placeholder="请输入品牌名称" v-model="brandParam.brandName" style="width:100%">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="telephone">
                        <el-input type="text" placeholder="请输入联系电话" v-model="brandParam.telephone" style="width:100%">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="品牌网络" prop="brandWeb">
                        <el-input type="text" placeholder="请输入品牌网络" v-model="brandParam.brandWeb" style="width:100%">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="品牌Logo" prop="brandLogo">
                        <el-upload  action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
                            <img v-if="value" :src="value" class="avatar">
                            <div class="avatar-uploader" v-else>
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                            </div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="品牌描述" prop="brandDesc">
                        <el-input type="text" placeholder="请输入品牌描述" v-model="brandParam.brandDesc" style="width:100%">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="品牌状态" prop="brandStatus">
                        <el-radio-group v-model="brandParam.brandStatus">
                            <el-radio :label="1">启用</el-radio>
                            <el-radio :label="0">禁用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="排序" prop="brandOrder">
                        <el-input type="text" placeholder="请输入排序" v-model="brandParam.brandOrder" style="width:100%">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer">
                <el-button @click="brandCancel">取 消</el-button>
                <el-button type="primary" @click="brandSubmit">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="suplierDialogVisible" width="30%" title="添加供应商" @close="supplierCancel">
            <div class="dialogContent">
                <el-form label-width="110px" :model="supplierParam" :rules="rules" ref="supplierParam">
                    <el-form-item label="编码" prop="supplierCode">
                        <el-input type="text" placeholder="请输入供应商编码" v-model="supplierParam.supplierCode" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="名称" prop="supplierName">
                        <el-input type="text" placeholder="请输入供应商名称" v-model="supplierParam.supplierName" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="类型" prop="supplierType">
                         <el-select v-model="supplierParam.supplierType" placeholder="请选择供应商类型" class="allWidth">
                            <el-option label="自营" :value="1"></el-option>
                            <el-option label="平台" :value="2"></el-option>
                         </el-select>
                    </el-form-item>
                      <el-form-item label="一级分类" prop="oneCategoryId">
                        <el-select v-model="supplierParam.oneCategoryId" placeholder="请选择一级分类" class="allWidth">
                            <el-option v-for="item in firstCatorOption" :key="item.oneCategoryId" :label="item.name" :value="item.oneCategoryId"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="图片上传" prop="supplierLogo">
                        <el-upload  action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
                            <img v-if="value" :src="value" class="avatar">
                            <div class="avatar-uploader" v-else>
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                            </div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="联系人" prop="linkMan">
                        <el-input type="text" placeholder="请输入供应商联系人" v-model="supplierParam.linkMan" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="phoneNumber">
                        <el-input type="text" placeholder="请输入联系电话" v-model="supplierParam.phoneNumber" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="开户银行名称" prop="bankName">
                        <el-input type="text" placeholder="请输入供应商开户银行名称" v-model="supplierParam.bankName" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="银行账号" prop="bankAccount">
                        <el-input type="text" placeholder="请输入银行账号" v-model="supplierParam.bankAccount" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input type="text" placeholder="请输入供应商地址" v-model="supplierParam.address" class="allWidth">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="状态" prop="supplierStatus">
                        <el-radio-group v-model="supplierParam.supplierStatus">
                            <el-radio :label="1">启用</el-radio>
                            <el-radio :label="0">禁用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer">
                <el-button @click="supplierCancel">取 消</el-button>
                <el-button type="primary" @click="supplierSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import  url from '../utils/api'
export default {
    name: 'basicInfo',
    data() {
        return {
            basicParam:{
                productName:'',
                brandId:'',
                supplierId:'',
                oneCategoryId:'',
                twoCategoryId:'',
            },
            brandOption:[],//品牌集合
            supplierOption:[],//供应商集合
            firstCatorOption:[],//一级分类集合
            secondCatorOption:[],//二级分类集合
            brandDialogVisible:false,//品牌对话框
            suplierDialogVisible:false,//供应商对话框
            brandParam:{//品牌表单
                brandName:'',
                telephone:'',
                brandWeb:'',
                brandLogo:'',
                brandDesc:'',
                brandStatus:'',
                brandOrder:''
            },
            supplierParam: {//供应商表单
                supplierCode:'',
                supplierName:'',
                supplierType:'',
                oneCategoryId:'',
                supplierLogo:'',
                linkMan: '',
                phoneNumber: '',
                bankName: '',
                bankAccount: '',
                address: '',
                supplierStatus: '',
            },
            value:'',
            rules:{
                //基础信息部分
                //品牌部分
                brandName:[
                    { required: true, message: '请输入品牌名称', trigger: 'blur' },
                ],
                telephone:[
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                brandOrder:[
                    { required: true, message: '请输入排序', trigger: 'blur' },
                ],
                //供应商部分
                supplierCode:[
                    { required: true, message: '请输入供应商编码', trigger: 'blur' },
                ],
                linkMan:[
                    { required: true, message: '请输入联系人', trigger: 'blur' },
                ],
                phoneNumber:[
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                bankName:[
                    { required: true, message: '请输入开户银行名称', trigger: 'blur' },
                ],
                bankAccount:[
                    { required: true, message: '请输入银行账号', trigger: 'blur' },
                ],
                address:[
                    { required: true, message: '请输入地址', trigger: 'blur' },
                ],
            }
        }
    },
    mounted() {
        this.getBrandOption()
        this.getSuplierOption()
        this.getFirstCator()
    },
    methods: {
        //查品牌
        getBrandOption(){
            this.$post(url.baseUrl + 'prod-api/shangpinApp/info/list',{}).then(res =>{
                if(res.data.code == 200){
                    this.brandOption= res.data.rows
                }
            })
        },
        //查供应商
        getSuplierOption(){
            this.$post(url.baseUrl + 'prod-api/supplierApp/info/list',{}).then(res =>{
                if(res.data.code == 200){
                    this.supplierOption= res.data.rows
                }
            })
        },
        //查1级分类
        getFirstCator(){
            this.$get(url.baseUrl + 'prod-api/productInfoOneApp/type/list',{}).then(res =>{
                if(res.data.code == 200){
                    this.firstCatorOption= res.data.rows
                }
            })
        },
        //查2级分类
        getSecondCator(){
            this.basicParam.twoCategoryId = ''
            if(this.basicParam.oneCategoryId){
                this.$get(url.baseUrl + 'prod-api/productInfoTwoApp/type/list',{oneCategoryId:this.basicParam.oneCategoryId}).then(res =>{
                    if(res.data.code == 200){
                        this.secondCatorOption= res.data.rows
                    }
                })
            }
        },
        //品牌提交
        brandSubmit(){
            let _this = this
            this.$refs.brandParam.validate(valid => {
                if(valid){
                    _this.$post(url.baseUrl + 'prod-api/shangpinApp/info/add',_this.brandParam).then(res =>{
                        if(res.data.code == 200){
                            _this.getBrandOption()
                            _this.brandCancel()
                        }
                    })
                }
            })
        },
        //品牌取消
        brandCancel(){
            this.$refs.brandParam.resetFields()
            this.brandDialogVisible = false
        },
        //供应商提交
        supplierSubmit(){
            let _this = this
            this.$refs.supplierParam.validate(valid => {
                if(valid){
                    _this.$post(url.baseUrl + 'prod-api/supplierApp/info/add',_this.supplierParam).then(res =>{
                        if(res.data.code == 200){
                            _this.getSuplierOption()
                            _this.supplierCancel()
                        }
                    })
                }
            })
        },
        //供应商取消
        supplierCancel(){
            this.$refs.supplierParam.resetFields()
            this.suplierDialogVisible = false
        }
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
    color:rgb(128, 145, 225);
    cursor: pointer;
}
.dialogContent{
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
}
.avatar-uploader{
    border: 1px dashed #d9d9d9 !important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
