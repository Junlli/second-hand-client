import { quillEditor } from 'vue-quill-editor' // 调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { newJson } from '@/utils/js/index'
export default {
  data () {
    return {
      buttonSize: 'large',
      editorOption: {},
      apiData: {
        f_type: '',
        f_content: ''
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    submitQuestion () {
      if (this.apiData.f_type === '界面视觉') {
        this.apiData.f_type = 1
      } else if (this.apiData.f_type === '功能相关') {
        this.apiData.f_type = 2
      } else if (this.apiData.f_type === '内容错误') {
        this.apiData.f_type = 3
      } else if (this.apiData.f_type === '其它') {
        this.apiData.f_type = 4
      }
      let apiData = newJson(this.apiData)
      this.$api.post(this.$SERVER.POST_FEEDBACKADD, apiData)
        .then(data => {
          console.log(data)
        })
      this.apiData.f_content = ''
    },
    onEditorReady (editor) {}, // 准备编辑器
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {} // 内容改变事件
  }
}
