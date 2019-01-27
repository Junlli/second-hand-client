<template>
  <div class="footer">
    <div class="w">
      <div class="contact">
        <h3 class="title">
          联系我们/
          <span>cantact us</span>
        </h3>
        <Poptip trigger="hover" placement="top">
          <a>
            <i class="iconfont">&#xe64c;</i>
          </a>
          <div class="api" slot="content">
            <img src="~@/assets/img/footer/qq.png" alt="">
          </div>
        </Poptip>
        <Poptip trigger="hover" placement="top">
          <a>
            <i class="iconfont">&#xe60b;</i>
          </a>
          <div class="api" slot="content">
            <img src="~@/assets/img/footer/wechat.jpg" alt="">
          </div>
        </Poptip>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "index";
</style>
