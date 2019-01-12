<template>
  <div class="question">
    <Form :model="formItem" :label-width="150" class="question-form">
      <FormItem label="反馈内容关于" class="form-label">
        <RadioGroup v-model="formItem.radio">
          <Radio label="界面视觉"></Radio>
          <Radio label="功能相关"></Radio>
          <Radio label="内容错误"></Radio>
          <Radio label="其它"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="反馈内容">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="Enter something..." :maxlength="250"></Input>
        <span class="word-num">(250字以内)</span>
      </FormItem>
      <FormItem label="上传截图">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <Button :size="buttonSize" icon="ios-cloud-upload-outline" type="primary">上传</Button>
        </Upload>
      </FormItem>
      <FormItem class="submit">
        <Button :size="buttonSize" type="primary">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import "index";
</style>
