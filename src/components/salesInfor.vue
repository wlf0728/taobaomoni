<template>
  <div class="hello">
    <el-row class="title">
      <el-col :span="24">
        销售信息
      </el-col>
    </el-row>
    <div class="content">
      <el-form label-width="170px">
        <el-form-item label="颜色分类">
          <div class="innerFormArea">
            <div class="wrap">
              <el-row>
                <el-col :span="8" class="box" v-for="(item,index) in dataList" :key="index">
                  <el-checkbox :checked="item.checked" label="" name="type"></el-checkbox>
                  <span class="wrap_color" :style="{ background: item.color}"></span>
                  <span class="wrap_text">{{item.name}}</span>
                  <span class="wrap_btn"></span>
                  <span style="color:#38f;font-size:12px;cursor:pointer">选择图片</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="宝贝销售规格">
          <div class="tips">在标题栏中输入或者选择内容可以进行筛选或批量填充
            <div class="tianchong">批量填充</div>
          </div>

          <div class="innerFormArea">
            <div class="wrap">
              <el-table :data="tableData" border style="width: 100%" size="small">
                <el-table-column prop="date" label="颜色分类" width="200">
                </el-table-column>
                <el-table-column prop="name" label="价格">
                </el-table-column>
                <el-table-column prop="address" label="数量">
                </el-table-column>
                <el-table-column prop="addres" label="商家编码">
                </el-table-column>
                <el-table-column prop="addres" label="商家条形码">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="一口价:" required>
          <el-input type="text" placeholder="请输入内容" v-model="form.name" style="width:30%">
          </el-input> 元
        </el-form-item>
        <el-form-item label="总数量:" required>
          <el-input type="text" placeholder="请输入内容" v-model="form.name" style="width:30%">
          </el-input> 件
        </el-form-item>
        <el-form-item label="商家编码:">
          <el-input type="text" placeholder="请输入内容" v-model="form.name" maxlength="64" show-word-limit style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="商家条形码:">
          <el-input type="text" placeholder="请输入内容" v-model="form.name" maxlength="64" show-word-limit style="width:80%"></el-input>
        </el-form-item>
      </el-form>
    </div>
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
      },
      dataList: [
        {
          color: 'green',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#38f',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#925800',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#e4de20',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#ccc',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#3ef165',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#def13e',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#999',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#8c9447',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#70009e',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: 'blue',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#fff',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#e87ab7',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#de5aff',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: '#5a0071',
          name: "可调节款，竹纤维",
          checked: true
        },
        {
          color: 'red',
          name: "红色",
          checked: false
        },
        {
          color: 'yellow',
          name: "黄色",
          checked: false
        },
        {
          color: '#925800',
          name: "褐色",
          checked: false
        },
        {
          color: 'blue',
          name: "蓝色",
          checked: false
        },
        {
          color: '#9c0202',
          name: "酒红色",
          checked: false
        },
        {
          color: '#fff',
          name: "透明",
          checked: false
        },
        {
          color: 'green',
          name: "绿色",
          checked: false
        },
        {
          color: '#38f',
          name: "天蓝色",
          checked: false
        },
        {
          color: '#000',
          name: "黑色",
          checked: false
        },
      ],
      tableData: [{
        date: '可调节款，竹纤维，辛迪粉',
        name: '59.00',
        address: '100'
      }, {
        date: '可调节款，乳胶填充，辛迪粉',
        name: '98.00',
        address: '100'
      }, {
        date: '可调节款，竹纤维，夕雾绿',
        name: '66.00',
        address: '100'
      }, {
        date: '可调节款，竹纤维，辛迪粉',
        name: '59.00',
        address: '100'
      }, {
        date: '可调节款，竹纤维，夕雾绿',
        name: '66.00',
        address: '100'
      }, {
        date: '可调节款，竹纤维，夕雾绿',
        name: '66.00',
        address: '100'
      }, {
        date: '可调节款，乳胶填充，辛迪粉',
        name: '98.00',
        address: '100'
      }, {
        date: '可调节款，竹纤维，辛迪粉',
        name: '59.00',
        address: '100'
      }]
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
.hello {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
}

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
  text-align: left;
  padding-left: 5px;
  line-height: 30px;
  font-size: 12px;
  border: 1px solid #ccc;
}

.box {
  display: flex;
  margin: 2px 0;
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
  padding-left: 10px;
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
  position: absolute;
  right: 11%;
  top: 0;
  border-radius: 5px;
  margin-bottom: 10px;
}

.innerFormArea {
  width: 90%;
  padding: 10px 20px 20px 0;
  background-color: rgb(252, 252, 252);
  border: 1px solid rgb(238, 238, 238);
}

.tips {
  color: rgb(146, 148, 161);
  width: 100%;
  height: 50px;
  position: relative;
}

.content {
  background-color: #fff;
  padding-top: 20px;
  /*box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);*/
}

.title {
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  /*box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);*/
  border-bottom: 1px solid rgb(238, 238, 238);
}
</style>
