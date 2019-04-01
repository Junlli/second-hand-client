<template>
  <div id="identify">
    <div id="student_id" class="id_ways clearfix" v-if="userInfo.u_apply.u_static == 0 && userInfo.u_static == false" :class="{show:isHide}">
      <div class="id_right_part">
          <a class="id_it" @click="handleClick">立即认证</a>
      </div>
      <div class="id_left_part">
        <img src="https://www.youzixy.com/Public/images/icon/cert.png" alt="学号">
        <div class="id_info">
          <h1>认证</h1>
          <p>认证方式：学生证，身份证，学生卡</p>
        </div>
      </div>
    </div>
    <div class="bottom_info" :class="{show: isShow}">
      <div class="identify-wrapper center">
        <div class="idtf-content">
          <div class="idtf-steps">
            <div class="divide-l step clearfix">
              <span><img class="feiji" src="https://www.youzixy.com/Public/images/icon/feiji.png"></span>
              <span class="idtf-o">1</span>
              <span class="first">填写学号和姓名</span>
            </div>
            <div class="divide-l step clearfix">
              <span><img class="feiji" src="https://www.youzixy.com/Public/images/icon/feiji.png"></span>
              <span class="idtf-o">2</span>
              <span class="second">上传认证照片</span>
            </div>
            <div class="divide-l step clearfix">
              <span><img class="feiji" src="https://www.youzixy.com/Public/images/icon/feiji.png"></span>
              <span class="idtf-o">3</span>
              <span class="third">提交认证审核</span>
            </div>
          </div>

          <div class="idtf-upload">
            <form id="certform">
              <div class="std_input_info">
                <div class="std_input field">
                  <span>姓名</span>
                  <input
                    id="Name"
                    name="name"
                    type="text"
                    placeholder="请输入真实姓名"
                    data-validate="required:姓名是个必填项哦~"
                    v-model="getApiData.p_name"
                  >
                </div>
                <div class="std_input field">
                  <span>身份证号或学号</span>
                  <input
                    name="cardnum"
                    id="StudentId"
                    type="text"
                    placeholder="例15251103222"
                    data-validate="required:证件号是必填项哦~"
                    v-model="getApiData.p_prove"
                  >
                </div>
                <div class="std_input field">
                  <span>学校</span>
                  <input
                    name="school"
                    id="School"
                    type="text"
                    placeholder="例桂林电子科技大学"
                    data-validate="required:学校是个必填项哦~"
                    v-model="getApiData.p_school"
                  >
                </div>
              </div>
              <Alert type="warning" show-icon>请上传学生证，或学生卡，或身份证</Alert>
              <el-upload
                class="avatar-uploader"
                :action="$SERVER.URL + $SERVER.PATH + $SERVER.POST_UPIMG"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                >
                <img v-if="getApiData.p_image" :src="$SERVER.FILEURL + getApiData.p_image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <Button type="primary" size="large" @click="onSubmit">提交认证</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="result" v-if="(u_static == 1 || userInfo.u_apply.u_static == 1) && userInfo.u_static == false">
      <p>您的资料已经提交，请等待审核...</p>
    </div>
    <div class="success" v-if="userInfo.u_apply.u_static == 0 && userInfo.u_static == true">
      <p>您的认证已通过！</p>
    </div>
  </div>
</template>

<script src="./index"></script>
<style lang="scss">
  @import "index";
</style>
