<template>
  <div class="bg">
    <home-header></home-header>
    <div class="type-page">
      <div class="release-title" v-if="!this.$route.query.id">
        <h1>发布商品</h1>
      </div>
      <div class="release-title" v-else>
        <h1>编辑商品</h1>
      </div>
      <el-form ref="form" :model="apiData" label-width="80px">
        <el-form-item label="商品标题">
          <el-input v-model="apiData.c_title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-input type="textarea" v-model="apiData.c_detail"></el-input>
        </el-form-item>
        <el-form-item label="相册">
          <el-upload
            :action="$SERVER.URL + $SERVER.PATH + $SERVER.POST_UPIMG"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="4"
            :on-success="handleSuccess"
            :class="{disabled: isShow}"
            :file-list="filePath"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl">
          </el-dialog>
          <span>(最多上传4张)</span>
        </el-form-item>
        <el-form-item label="分类">
          <el-select
            v-model="apiData.c_type"
            placeholder="一级分类"
            @change="getType2"
          >
            <el-option
              v-for="item in c_type"
              :key="item._id"
              :value="item.t_name"
            ></el-option>
          </el-select>
          <el-select v-model="apiData.c_type2" placeholder="二级分类">
            <el-option
              v-for="item in c_type2"
              :key="item"
              :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="库存">
          <el-input v-model="apiData.c_num" placeholder="请输入商品库存"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="apiData.c_price" placeholder="请输入价格（最多两位小数）"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="apiData.u_tel" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="apiData.u_qq" placeholder="请输入QQ"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="apiData.u_wx" placeholder="请输入微信号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="submit-btn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import '~@/sass/common.scss';
  @import "index";
</style>
