<template>
  <div class="module-box private-letter">
    <div class="module-body">
      <ul class="letter-list" v-for="(item, index) in newsList" :key="index">
        <li>
          <a class="letter-link">
          </a>
          <div class="letter-info">
            <span class="l-time">{{ item.create_date }}</span>
            <div class="l-operate-bar">
              <Button type="error">删除</Button>
            </div>
          </div>
          <div class="chat-headbox">
            <a class="list-head" href="javascript:void(0);">
              <img alt="头像" src="https://static.nowcoder.com/images/head/notify.png">
            </a>
          </div>
          <div class="letter-detail">
            <div class="letter-name-wrap">
              <a title="通知" href="javascript:void(0);">
                通知
              </a>
            </div>
            <p class="letter-brief">
              <a v-html="item.n_content">
              </a>
            </p>
          </div>
        </li>
      </ul>
      <center>
      </center>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "index";
</style>
<script src="./index.js"></script>
