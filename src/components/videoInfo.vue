<template>
    <div class="hello">
        <div class="basicPanel">
            <div class="title">图文描述</div>
            <div class="content">
                <el-form label-width="170px" :model="formParam" :rules="rule" ref="formParam">
                    <el-form-item label="商品主图" prop="mainPic">
                        <el-upload
                            ref="mainPicUpload"
                            :show-file-list="false"
                            :action="`${url.baseUrl}prod-api/shangpinApp/pic/common/upload`"
                            :on-success="mainPicUpload"
                            name="avatarfile">
                            <img v-if="formParam.mainPic" :src="fullPic" class="avatar">
                            <div class="avatar-uploader" v-else>
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                            </div>
                        </el-upload>
                        <div class="tips">宝贝主图大小不能超过3MB；700*700以上图片上传后宝贝详情页自动提供放大镜功能。</div>
                        <div class="tips">商品图片中的一张设为淘宝直通车推广创意时，更新此图片会同步至淘宝直通车创意。</div>
                    </el-form-item>
                    <el-form-item label="非主图" prop="picList">
                        <el-upload
                            ref="otherPicUpload"
                            :action="`${url.baseUrl}prod-api/shangpinApp/pic/common/upload`"
                            :fileList="picList"
                            list-type="picture-card"
                            name="avatarfile"
                            :on-success="otherPicUpload"
                            :on-remove="otherRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="详情图" prop="picList">
                        <el-upload
                            ref="otherPicUpload"
                            :action="`${url.baseUrl}prod-api/shangpinApp/pic/common/upload`"
                            :file-list="detailList"
                            list-type="picture-card"
                            name="avatarfile"
                            :on-success="detailPicUpload"
                            :on-remove="detailRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                    <!-- <el-form-item label="主图视频比例">
                        <el-radio-group v-model="value">
                            <el-radio :label="3">1:1或16:9</el-radio>
                            <el-radio :label="6">3:4</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="主图视频" required>
                        <el-row>
                            <el-col :span="6">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false">
                                    <video src="../assets/c0a23ccb408e81c69c327b6763c16a8d.mp4" class="avatar"></video>
                                    <i  class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-col>
                            <el-col :span="18">
                                <div class="tips">1.尺寸:此处可使用1:1或16:9比例视频</div>
                                <div class="tips">2.时长:≤60s,建议30秒以内短视频可优先在爱逛街等推荐频道展现</div>
                                <div class="tips">2.内容:突出商品1-2个核心卖点，不建议电子相册式的图片翻页视频</div>
                                <div class="tips">视频不会拍？查看完整教程（<span class="blueTip">点击查看</span>）</div>
                            </el-col>
                        </el-row>
                        
                        <div style="float:right"></div>
                    </el-form-item>
                    <el-form-item label="宝贝视频" required>
                        <div class="tips">宝贝视频将在宝贝详情页中展示，可以更真实，直观表达商品卖点。消费者决策前最后一步，快速提高成交转化。</div>
                        <div class="tips">您未订购视频服务，或视频服务已过期，如有需要，请先<span class="blueTip">订购视频服务</span></div>
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false">
                            <video src="../assets/c0a23ccb408e81c69c327b6763c16a8d.mp4" class="avatar"></video>
                            <i  class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="电脑端描述" required>
                        <vue-ueditor-wrap 
                            ref="ueditor" 
                            v-model="value" 
                            :destroy="false" 
                            :config="config"
                            @ready="ready">
                        </vue-ueditor-wrap>
                    </el-form-item>
                    <el-form-item label="手机端描述" required>
                        <vue-ueditor-wrap 
                            ref="ueditor" 
                            v-model="value" 
                            :destroy="false" 
                            :config="config"
                            @ready="ready">
                        </vue-ueditor-wrap>
                    </el-form-item>
                    <el-form-item label="店铺中分类" required>
                        <div class="tips">最多支持选择10项分类，<span class="blueTip">查看店铺分类</span></div>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option label="item.label" value="item.value"></el-option>
                        </el-select>
                    </el-form-item> -->
                </el-form>
                <div class="buttonPannel">
                    <el-button @click="cancel">取消</el-button>
                    <el-button type="primary" @click="save">保存</el-button>
                </div>
            </div>
            <div class="bottom">

            </div>
        </div>
    </div>
</template>

<script>
import  url from '../utils/api'
// import VueUeditorWrap from 'vue-ueditor-wrap'
import Bus from '../assets/Bus'
export default {
    name: 'basicInfo',
    // components:{
    //     VueUeditorWrap
    // },
    data() {
        return {
            url:url,
            // editorInstance:{},
            // config: {
            //     serverUrl: '', // 如果需要上传功能,找后端小伙伴要服务器接口地址
            //     UEDITOR_HOME_URL: '/static/UEditor/', //资源路径
            //     autoHeightEnabled: false,   // 编辑器不自动被内容撑高 
            //     initialFrameHeight: 300,    // 初始容器高度
            //     initialFrameWidth: '90%',  // 初始容器宽度
            //     enableAutoSave: false // 关闭自动保存
            // },
            formParam:{
                productId:'',
                mainPic:'',
                productPicId:'',
                picList:[],
                picListId:[],
                picDetails:[],
                picDetailsId:[],
                picOrders:[],
            },
            fullPic:'',
            rule:{
                mainPic: [
                    { required: true, message: "商品主图不能为空", trigger: "blur" }
                ],
                picList: [
                    {type:'array', required: true, message: "商品非主图不能为空", trigger: "blur" }
                ],
            },
            productDetail:{},
            picList:[],
            detailList:[],
            isModify:false,
        }
    },
    mounted() {
        let _this = this
        Bus.$on('sendProductId',res =>{
            _this.formParam.productId = res
        })
        Bus.$on('productDetail',res =>{
            _this.productDetail = res
            _this.formParam.productId = res.productInfo.productId
            _this.isModify = true
            _this.formParam.picListId = []
            _this.formParam.picDetailsId = []
            res.list.map(item => {
                if(item.isMaster == 1){
                    _this.fullPic = url.baseUrl +'prod-api' + item.picUrl
                    _this.formParam.mainPic = item.picUrl
                    _this.formParam.productPicId = item.productPicId
                }
                else if(item.isMaster === 0 && item.isDetail === 0){
                    _this.picList.push({
                        url:url.baseUrl +'prod-api' + item.picUrl,
                        response:{
                            fileName: item.picUrl
                        }
                    })
                    _this.formParam.picList.push(item.picUrl)
                    _this.formParam.picListId.push(item.productPicId)
                }
                else if(item.isMaster === 0 && item.isDetail === 1){
                    _this.detailList.push({
                        url:url.baseUrl +'prod-api' + item.picUrl,
                        response:{
                            fileName: item.picUrl
                        }
                    })
                    _this.formParam.picOrders[item.picOrder - 1] = item.picOrder
                    _this.formParam.picDetails.push(item.picUrl)
                    _this.formParam.picDetailsId.push(item.productPicId)
                }
            })
        })
    },
    methods: {
        mainPicUpload(res, file, fileList){
            if(res.code == 200){
                this.formParam.mainPic = res.fileName
                this.fullPic = res.url
            }
        },
        otherPicUpload(res, file, fileList){
            if(res.code == 200){
                this.formParam.picList = fileList.map(item => {
                    return item.response.fileName
                })
            }
        },
        otherRemove(file, fileList){
            this.formParam.picList = fileList.map(item => {
                return item.response.fileName
            })
        },
        detailPicUpload(res, file, fileList){
            this.formParam.picOrders = []
            if(res.code == 200){
                this.formParam.picDetails = fileList.map((item,index) => {
                    this.formParam.picOrders.push(index + 1)
                    return item.response.fileName
                })
            }
        },
        detailRemove(){
            this.formParam.picOrders = []
            if(res.code == 200){
                this.formParam.picDetails = fileList.map((item,index) => {
                    this.formParam.picOrders.push(index + 1)
                    return item.response.fileName
                })
            }
        },
        save(){
            let _this = this
            if(this.formParam.productId){
                this.$refs.formParam.validate(valid => {
                    if(valid){
                        if(_this.isModify){
                            _this.$post(url.baseUrl + 'prod-api/shangpinApp/pic/updateList',_this.formParam).then(res =>{
                                if(res.data.code == 200){
                                    _this.$message({
                                        message: '保存成功',
                                        type: 'success'
                                    })
                                    top.location.href="http://182.92.226.253:8080/list/commodity"
                                }else{
                                    _this.$message({
                                        message: res.message,
                                        type: 'error'
                                    })
                                }
                            })
                        }else{
                            _this.$post(url.baseUrl + 'prod-api/shangpinApp/pic/addAll',_this.formParam).then(res =>{
                                if(res.data.code == 200){
                                    _this.$message({
                                        message: '保存成功',
                                        type: 'success'
                                    })
                                    top.location.href="http://182.92.226.253:8080/list/commodity"
                                }else{
                                    _this.$message({
                                        message: res.message,
                                        type: 'error'
                                    })
                                }
                            })
                        }
                    }
                })
            }else{
                this.$message({
                    message: '请先保存商品基本信息',
                    type: 'error'
                })
            }
        },
        cancel(){
            this.$refs.mainPicUpload.clearFiles()
            this.$refs.otherPicUpload.clearFiles()
            this.$refs.formParam.resetFields()
        }
    }

}
</script>

<style scoped>
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
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 148px;
    line-height: 148px;
    text-align: center;
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
    width: 148px;
    line-height: 148px;
    text-align: center;
}
.avatar {
    width: 148px;
    height: 148px;
    display: block;
}
.buttonPannel{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}
</style>
<style>
.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.el-upload:hover {
    border-color: #409EFF;
}
.el-upload--picture-card{
    background: #fff;
}
</style>
