<template>
    <div class="hello">
        <div class="basicPanel">
            <div class="title">图文描述</div>
            <div class="content">
                <el-form label-width="170px">
                    <el-form-item label="电脑端宝贝图片" required>
                        <div class="tips">宝贝主图大小不能超过3MB；700*700以上图片上传后宝贝详情页自动提供放大镜功能。</div>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <div class="tips">商品图片中的一张设为淘宝直通车推广创意时，更新此图片会同步至淘宝直通车创意。</div>
                    </el-form-item>
                    <el-form-item label="主图视频比例">
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
                                    <!-- <i  class="el-icon-plus avatar-uploader-icon"></i> -->
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
                            <!-- <i  class="el-icon-plus avatar-uploader-icon"></i> -->
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="电脑端描述" required>
                        <el-radio-group v-model="value">
                            <el-radio :label="3">使用文本编辑器</el-radio>
                            <el-radio :label="6">使用旺铺详情编辑器</el-radio>
                        </el-radio-group>
                        <vue-ueditor-wrap 
                            ref="ueditor" 
                            v-model="value" 
                            :destroy="false" 
                            :config="config"
                            @ready="ready">
                        </vue-ueditor-wrap>
                    </el-form-item>
                    <el-form-item label="手机端描述" required>
                        <el-radio-group v-model="value">
                            <el-radio :label="3">使用文本编辑器</el-radio>
                            <el-radio :label="6">使用旺铺详情编辑器</el-radio>
                        </el-radio-group>
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
                    </el-form-item>
                </el-form>
            </div>
            <div class="bottom">

            </div>
        </div>
    </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
    name: 'basicInfo',
    components:{
        VueUeditorWrap
    },
    // 'isCheck':function(n,o){
    //     if(n == true){
    //         this.editorInstance.setDisabled()
    //     }else{
    //         this.editorInstance.setEnabled()
    //     }
    // }
    data() {
        return {
            editorInstance:{},
            value:'',
            config: {
                serverUrl: '', // 如果需要上传功能,找后端小伙伴要服务器接口地址
                UEDITOR_HOME_URL: '/static/UEditor/', //资源路径
                autoHeightEnabled: false,   // 编辑器不自动被内容撑高 
                initialFrameHeight: 300,    // 初始容器高度
                initialFrameWidth: '90%',  // 初始容器宽度
                enableAutoSave: false // 关闭自动保存
            },
        }
    },
    mounted() {

    },
    methods: {
        ready(editorInstance){
            this.editorInstance = editorInstance
        },

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
</style>
