<template>
  <div class="bg">
    <home-header></home-header>
    <div class="type-page">
      <div class="release-title">
        <h1>发布商品</h1>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品标题">
          <el-input v-model="form.name" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="相册">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="4"
            :on-success="handleSuccess"
            :class="{disabled: isShow}"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <span>(最多上传4张)</span>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.region" placeholder="一级分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="二级分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易地点">
          <el-input v-model="form.name" placeholder="宿舍、教学楼、食堂等"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.name" placeholder="请输入价格（最多两位小数）"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.name" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="form.name" placeholder="请输入QQ"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="form.name" placeholder="请输入微信号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="submit-btn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import '~@/sass/common.scss';
  @import "index";
</style>
