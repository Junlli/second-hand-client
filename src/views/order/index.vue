<template>
  <div class="bg">
    <home-header></home-header>
    <div class="main">
      <div class="write">
        <div class="write-title">
          <h2>填写个人信息</h2>
        </div>
        <Form :model="getApiData" :label-width="120">
          <FormItem label="收货人：">
            <Input v-model="getApiData.o_name" placeholder="请输入收货人姓名"></Input>
          </FormItem>
          <FormItem label="交易地址：">
            <Input v-model="getApiData.o_address" placeholder="教学楼/食堂/宿舍等"></Input>
          </FormItem>
          <FormItem label="联系电话：" type="number">
            <Input v-model="getApiData.o_tel"  placeholder="请输入联系电话"></Input>
          </FormItem>
        </Form>
      </div>
      <div class="confirm">
        <h2>确认订单信息</h2>
        <Table
          highlight-row ref="currentRowTable"
          :columns="columns"
          :data="data4"
        ></Table>
        <Button type="primary" size="large" @click="submit" class="submit">提交订单</Button>
        <Button class="cancel" size="large" @click="toDetail">取消</Button>
        <Modal v-model="modal" width="360">
          <p slot="header" style="text-align:center">
            <span>确认订单</span>
          </p>
          <div>
            <p>
              <span class="item-title">实付款：</span>
              <span v-text="this.commodityInfo.c_price * this.o_num/100"></span>
            </p>
            <p>
              <span class="item-title">收货人：</span>
              <span v-text="getApiData.o_name"></span>
            </p>
            <p>
              <span class="item-title">交易地址：</span>
              <span v-text="getApiData.o_address"></span>
            </p>
            <p>
              <span class="item-title">联系电话：</span>
              <span v-text="getApiData.o_tel"></span>
            </p>
          </div>
          <div slot="footer">
            <Button type="primary" @click="confirm">确认</Button>
            <Button @click="cancel">取消</Button>
          </div>
        </Modal>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import "index";
</style>
