<template>
  <div class="hello">
    <el-row class="title">
      <el-col :span="24">
        销售信息
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="3" style="text-align:right;padding-right:10px;">
        颜色分类
      </el-col>
      <el-col :span="20">
        <div class="wrap">
          <el-row>
            <el-col :span="8" class="box">
              <el-checkbox label="" name="type"></el-checkbox>
              <span class="wrap_color"></span>
              <span class="wrap_text">可调节款，竹纤维</span>
              <span class="wrap_btn"></span>
              <span style="color:#38f;font-size:12px;">选择图片</span>
            </el-col>
            <el-col :span="8" class="box">
              <el-checkbox label="" name="type"></el-checkbox>
              <span class="wrap_color"></span>
              <span class="wrap_text">可调节款，竹纤维</span>
              <span class="wrap_btn"></span>
              <span style="color:#38f;font-size:12px;">选择图片</span>
            </el-col>
            <el-col :span="8" class="box">
              <el-checkbox label="" name="type"></el-checkbox>
              <span class="wrap_color"></span>
              <span class="wrap_text">可调节款，竹纤维</span>
              <span class="wrap_btn"></span>
              <span style="color:#38f;font-size:12px;">选择图片</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="3" style="text-align:right;padding-right:10px;line-height:32px;">
        宝贝销售规格
      </el-col>
      <el-col :span="17" style="line-height:32px;">
        在标题栏中输入或者选择内容可以进行筛选或批量填充
      </el-col>
      <el-col :span="4">
        <div class="tianchong">批量填充</div>
      </el-col>
      <el-col :span="3" style="text-align:right;padding-right:10px;">
        &nbsp
      </el-col>
      <el-col :span="20">
        <div class="wrap">

        </div>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="2">
        <div>&nbsp</div>
      </el-col>
      <el-col :span="22">
        <el-form>
          <el-form-item label="一口价:">
            <el-input v-model="form.name" style="width:30%"></el-input> 元
          </el-form-item>
          <el-form-item label="总数量:">
            <el-input v-model="form.name" style="width:30%"></el-input> 件
          </el-form-item>
          <el-form-item label="商家编码:">
            <el-input type="text" placeholder="请输入内容" v-model="form.name" maxlength="64" show-word-limit style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="商家条形码:">
            <el-input type="text" placeholder="请输入内容" v-model="form.name" maxlength="32" show-word-limit style="width:80%"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'salesInfor',
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
.wrap_color {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #ccc;
}

.wrap_text {
  display: inline-block;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  border: 1px solid #ccc;
}

.box {
  display: flex;
  flex-wrap: wrap;
}

.box>* {
  /*align-items: baseline;*/
  margin: auto 3px;
  background: #fff;
}

.wrap_btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
}

.wrap {
  width: 100%;
  height: 350px;
  background: #fafafa;
  margin-bottom: 20px;
}

.el-form-item__label {
  text-align: right;
  width: 11%!important;
}

.tianchong {
  width: 90px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  background: #38f;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
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
