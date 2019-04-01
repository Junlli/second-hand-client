<template>
  <div class="question">
    <Form :model="apiData" :label-width="150" class="question-form">
      <FormItem label="反馈内容关于" class="form-label">
        <RadioGroup v-model="apiData.f_type">
          <Radio label="界面视觉"></Radio>
          <Radio label="功能相关"></Radio>
          <Radio label="内容错误"></Radio>
          <Radio label="其它"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="反馈内容">
        <quill-editor
          v-model="apiData.f_content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
      </FormItem>
      <FormItem class="submit">
        <Button :size="buttonSize" type="primary" @click="submitQuestion">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import "index";
</style>
