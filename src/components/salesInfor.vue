<template>
  <div class="hello">
    <el-row class="title">
      <el-col :span="24">
        销售信息
      </el-col>
    </el-row>
    <div class="content">
      <el-form label-width="170px" :model="form" :rules="rules" ref="salesInfor">
        <!--<el-form-item label="颜色分类">
                                        <div class="innerFormArea">
                                          <div class="wrap">
                                            <el-row>
                                              <el-col :span="8" class="box" v-for="(item,index) in dataList" :key="index">
                                                <el-checkbox :checked="item.checked" label="" name="type"></el-checkbox>
                                                <span class="wrap_color" :style="{ background: item.color}"></span>
                                                <span class="wrap_text">{{item.style+item.use+item.model}}</span>
                                                <span class="wrap_btn"></span>
                                                <span style="color:#38f;font-size:12px;cursor:pointer">选择图片</span>
                                              </el-col>
                                            </el-row>
                                          </div>
                                        </div>
                                      </el-form-item>-->
        <el-form-item label="三级分类">
          <div class="tips">在标题栏中输入或者选择内容可以进行筛选或批量填充
            <div class="tianchong" @click="DialogVisible">新增 </div>
          </div>

          <div class="innerFormArea">
            <div class="wrap">
              <el-table :data="tableData" border style="width: 100%" size="small">
                <el-table-column prop="name" label="品名">
                </el-table-column>
                <el-table-column prop="manufacturer" label="厂家">
                </el-table-column>
                <el-table-column prop="specifications" label="规格" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==4||oneCategoryId==6">
                </el-table-column>
                <el-table-column prop="style" label="花色" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==6">
                </el-table-column>
                <el-table-column prop="quantitative" label="定量" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3">
                </el-table-column>
                <el-table-column prop="model" label="型号" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==5||oneCategoryId==7">
                </el-table-column>
                <el-table-column prop="use" label="用途" v-if="oneCategoryId!=7&&oneCategoryId!=9">
                </el-table-column>
                <el-table-column prop="details" label="详情">
                </el-table-column>
                <el-table-column prop="highLowVoltage" label="高低压" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3">
                </el-table-column>
                <el-table-column prop="species" label="种类" v-if="oneCategoryId==7">
                </el-table-column>
                <el-table-column prop="thickness" label="厚度" v-if="oneCategoryId==4||oneCategoryId==6">
                </el-table-column>
                <el-table-column prop="epLevel" label="环保等级" v-if="oneCategoryId==4||oneCategoryId==6||oneCategoryId==7">
                </el-table-column>
                <el-table-column prop="size" label="尺寸" v-if="oneCategoryId==5">
                </el-table-column>
                <el-table-column prop="pressure" label="压力" v-if="oneCategoryId==5">
                </el-table-column>
                <el-table-column prop="brand" label="品牌">
                </el-table-column>
                <el-table-column prop="region" label="地区" v-if="oneCategoryId==4||oneCategoryId==5">
                </el-table-column>
                <el-table-column prop="treeSpecies" label="树种" v-if="oneCategoryId==4||oneCategoryId==6||oneCategoryId==7">
                </el-table-column>
                <el-table-column prop="moistureContent" label="含水率" v-if="oneCategoryId==6">
                </el-table-column>
                <el-table-column prop="origin" label="产地" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==6">
                </el-table-column>
                <el-table-column prop="apparentdensity" label="表观密度" v-if="oneCategoryId==4||oneCategoryId==6">
                </el-table-column>
                <el-table-column prop="level" label="等级" v-if="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3">
                </el-table-column>
                <el-table-column prop="bendingstrength" label="抗弯强度" v-if="oneCategoryId==4||oneCategoryId==6">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="三级分类" prop="threeCategoryId">
          <el-select v-model="form.threeCategoryId" placeholder="请选择" class="allWidth">
            <el-option v-for="item in thirdCatorOption" :key="item.threeCategoryId" :label="item.name" :value="item.threeCategoryId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="销售价格:" required>
          <el-input type="text" placeholder="请输入内容" v-model="form.price" style="width:30%">
          </el-input> 元
        </el-form-item>
        <el-form-item label="库存量:" required>
          <el-input type="text" placeholder="请输入内容" v-model="form.inventory" style="width:30%">
          </el-input> 件
        </el-form-item>
        <el-form-item label="商家编码:">
          <el-input type="text" placeholder="请输入内容" v-model="form.productCore" maxlength="64" show-word-limit style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="国条码:">
          <el-input type="text" placeholder="请输入内容" v-model="form.barCode" maxlength="64" show-word-limit style="width:80%"></el-input>
        </el-form-item>
      </el-form>
      <el-dialog :visible.sync="suplierDialogVisible" width="30%" title="添加三级分类" @close="supplierCancel">
        <div class="dialogContent">
          <el-form label-width="110px" :model="supplierParam" :rules="rules" ref="supplierParam">
            <el-form-item label="品名" prop="supplierCode">
              <el-input type="text" placeholder="请输入品名" v-model="supplierParam.name" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="厂家" prop="supplierName">
              <el-input type="text" placeholder="请输入厂家" v-model="supplierParam.manufacturer" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="规格" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==4||oneCategoryId==6" prop="linkMan">
              <el-input type="text" placeholder="请输入规格" v-model="supplierParam.specifications" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="花色" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==6" prop="phoneNumber">
              <el-input type="text" placeholder="请输入花色" v-model="supplierParam.style" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="定量" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3" prop="bankName">
              <el-input type="text" placeholder="请输入定量" v-model="supplierParam.quantitative" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="型号" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==5||oneCategoryId==7" prop="bankAccount">
              <el-input type="text" placeholder="请输入型号" v-model="supplierParam.model" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="用途" v-show="oneCategoryId!=7&&oneCategoryId!=9" prop="address">
              <el-input type="text" placeholder="请输入用途" v-model="supplierParam.use" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="详情" prop="address">
              <el-input type="text" placeholder="请输入详情" v-model="supplierParam.details" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="高低压" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3" prop="address">
              <el-input type="text" placeholder="请输入高低压" v-model="supplierParam.highLowVoltage" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="种类" v-show="oneCategoryId==7" prop="address">
              <el-input type="text" placeholder="请输入种类" v-model="supplierParam.species" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="厚度" v-show="oneCategoryId==4||oneCategoryId==6" prop="address">
              <el-input type="text" placeholder="请输入厚度" v-model="supplierParam.thickness" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="环保等级" v-show="oneCategoryId==4||oneCategoryId==6||oneCategoryId==7" prop="address">
              <el-input type="text" placeholder="请输入环保等级" v-model="supplierParam.epLevel" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="尺寸" v-show="oneCategoryId==5" prop="address">
              <el-input type="text" placeholder="请输入尺寸" v-model="supplierParam.size" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="压力" v-show="oneCategoryId==5" prop="address">
              <el-input type="text" placeholder="请输入压力" v-model="supplierParam.pressure" class="allWidth">
              </el-input>
            </el-form-item>

            <el-form-item label="地区" v-show="oneCategoryId==4||oneCategoryId==5" prop="address">
              <el-input type="text" placeholder="请输入地区" v-model="supplierParam.region" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="品牌" prop="address">
              <el-input type="text" placeholder="请输入品牌" v-model="supplierParam.brand" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="树种" v-show="oneCategoryId==4||oneCategoryId==6||oneCategoryId==7" prop="address">
              <el-input type="text" placeholder="请输入树种" v-model="supplierParam.treeSpecies" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="含水率" v-show="oneCategoryId==6" prop="address">
              <el-input type="text" placeholder="请输入含水率" v-model="supplierParam.moistureContent" class="allWidth">
              </el-input>
            </el-form-item>
            <!--<el-form-item label="特殊功能" prop="address">
                          <el-input type="text" placeholder="请输入特殊功能" v-model="supplierParam.specialFunction" class="allWidth">
                          </el-input>
                        </el-form-item>-->
            <el-form-item label="产地" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3||oneCategoryId==6" prop="address">
              <el-input type="text" placeholder="请输入产地" v-model="supplierParam.origin" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="表观密度" v-show="oneCategoryId==4||oneCategoryId==6" prop="address">
              <el-input type="text" placeholder="请输入表观密度" v-model="supplierParam.apparentdensity" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="等级" v-show="oneCategoryId==1||oneCategoryId==2||oneCategoryId==3" prop="address">
              <el-input type="text" placeholder="请输入等级" v-model="supplierParam.level" class="allWidth">
              </el-input>
            </el-form-item>
            <el-form-item label="抗弯强度" v-show="oneCategoryId==4||oneCategoryId==6" prop="address">
              <el-input type="text" placeholder="请输入抗弯轻度" v-model="supplierParam.bendingstrength" class="allWidth">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer">
          <el-button @click="supplierCancel">取 消</el-button>
          <el-button type="primary" @click="supplierSubmit">确 定</el-button>
        </div>
      </el-dialog>
      <div class="buttonPannel">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import url from '../utils/api'
import Bus from '../assets/Bus'
export default {
  name: 'salesInfor',
  data() {
    return {
      suplierDialogVisible: false,
      oneCategoryId: "",
      productId: "",
      supplierParam: {
        oneCategoryId: "",//一级分类
        twoCategoryId: "",//二级分类
        threeCategoryId: "",//三级分类
        name: "",//品名
        manufacturer: "",//厂家
        specifications: "",//规格
        style: "",//花色
        quantitative: "",//定量
        model: "",//型号
        use: "",//用途
        details: '',//详情
        highLowVoltage: "",//高低压
        species: "",//种类
        thickness: "",//厚度
        epLevel: "",//环保等级
        other: "",//其他
        size: "",//尺寸
        pressure: "",//压力
        region: "",//地区
        brand: "",//品牌
        treeSpecies: "",//树种
        moistureContent: "",//含水率
        specialFunction: "",//特殊功能
        origin: '',//产地
        apparentdensity: "",//表观密度
        level: "",//等级
        bendingstrength: "",//抗弯强度

      },
      thirdCatorOption: [],//三级分类
      form: {
        productId: ""
      },
      rules: {
        //基础信息部分
        productCore: [
          { required: true, message: "商品编码不能为空", trigger: "blur" }
        ],
        productName: [
          { required: true, message: "商品名称不能为空", trigger: "blur" }
        ],
        barCode: [
          { required: true, message: "国条码不能为空", trigger: "blur" }
        ],
        brandId: [
          { required: true, message: "品牌不能为空", trigger: "blur" }
        ],
      },
      dataList: [
        // {
        //   color: 'green',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#38f',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#925800',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#e4de20',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#ccc',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#3ef165',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#def13e',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#999',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#8c9447',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#70009e',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: 'blue',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#fff',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#e87ab7',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#de5aff',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: '#5a0071',
        //   name: "可调节款，竹纤维",
        //   checked: true
        // },
        // {
        //   color: 'red',
        //   name: "红色",
        //   checked: false
        // },
        // {
        //   color: 'yellow',
        //   name: "黄色",
        //   checked: false
        // },
        // {
        //   color: '#925800',
        //   name: "褐色",
        //   checked: false
        // },
        // {
        //   color: 'blue',
        //   name: "蓝色",
        //   checked: false
        // },
        // {
        //   color: '#9c0202',
        //   name: "酒红色",
        //   checked: false
        // },
        // {
        //   color: '#fff',
        //   name: "透明",
        //   checked: false
        // },
        // {
        //   color: 'green',
        //   name: "绿色",
        //   checked: false
        // },
        // {
        //   color: '#38f',
        //   name: "天蓝色",
        //   checked: false
        // },
        // {
        //   color: '#000',
        //   name: "黑色",
        //   checked: false
        // },
      ],
      tableData: [

      ]
    }
  },
  mounted() {
    this.loadList();
    let _this = this
    Bus.$on('sendProductId', res => {
      _this.productId = res
      _this.form.productId = res
    })
    Bus.$on('sendBasicInfo', res => {
      _this.oneCategoryId = res.oneCategoryId;
      _this.supplierParam.oneCategoryId = res.oneCategoryId;
      _this.supplierParam.twoCategoryId = res.twoCategoryId;
      _this.supplierParam.threeCategoryId = res.threeCategoryId;
      // _this.forceUpdate()
    })
  },
  methods: {
    //查3级分类
    getThirdCator() {
      this.supplierParam.threeCategoryId = ''
      if (this.basicParam.twoCategoryId) {
        this.$post(url.baseUrl + 'prod-api/productInfoThreeApp/type/list', { twoCategoryId: this.supplierParam.twoCategoryId }).then(res => {
          if (res.data.code == 200) {
            this.thirdCatorOption = res.data.rows
          }
        })
      }
    },
    loadList() {
      this.$post(url.baseUrl + 'prod-api/productInfoThreeApp/type/list', { twoCategoryId: this.supplierParam.twoCategoryId }).then(res => {
        if (res.data.code == 200) {
          this.dataList = res.data.rows
          this.tableData = res.data.rows
        }
      });
      // var a = [
      //   { a: "装饰原纸", b: 1 },
      //   { a: "印刷纸", b: 2 },
      //   { a: "浸胶纸", b: 3 },
      //   { a: "基材板", b: 4 },
      //   { a: "压贴线", b: 5 },
      //   { a: "家装板材", b: 6 },
      //   { a: "智能家居", b: 7 },
      //   { a: "全屋定制", b: 9 },
      //   { a: "数码印刷", b: 10 },
      //   { a: "办公家具", b: 11 }
      // ]
    },
    DialogVisible() {
      // debugger
      if (this.productId.length > 0) {
        this.suplierDialogVisible = true;
      } else {
        this.$message({
          message: '请先保存商品基本信息',
          type: 'error'
        })
      }
    },
    supplierCancel() {
      this.$refs.supplierParam.resetFields()
      this.suplierDialogVisible = false
    },
    supplierSubmit() {
      let _this = this
      this.$refs.supplierParam.validate(valid => {
        if (valid) {
          _this.$post(url.baseUrl + 'prod-api/productInfoThreeApp/type/add', _this.supplierParam).then(res => {
            if (res.data.code == 200) {
              _this.$message({
                message: '保存成功',
                type: 'success'
              })
              _this.loadList();
              _this.supplierCancel();
              _this.getThirdCator();
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
    handleClick: function(tab, event) {
      console.log(tab, event);
    },
    save() {
      let _this = this
      this.$refs.salesInfor.validate(valid => {
        if (valid) {
          _this.$post(url.baseUrl + 'prod-api/shangpinApp/commodity/update', _this.form).then(res => {
            if (res.data.code == 200) {
              _this.$message({
                message: '保存成功',
                type: 'success'
              })
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
  overflow: scroll;
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
  padding-bottom: 20px;
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
