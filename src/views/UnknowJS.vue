<template>
  <div class="unknow-js-container">
    <input
      @click="clickEditor"
      v-model="script"
    >
    <CatalogSelector @chapterChanged="chapterChanged" />
    <!-- <UnknowJSNote  :elements="elements"/> -->
    <MonocaEditor
      test="1"
      @click="clickEditor"
      :template="elements"
      :script="script"
    />
  </div>
</template>

<script>
import MonocaEditor from '@/components/editor/MonocaEditor'
// import UnknowJSNote from '@/components/unknowJS/index'
import CatalogSelector from '@/components/unknowJS/CatalogSelector.vue'

export default {
  name: 'UnknowJS',
  components: {
    CatalogSelector,
    MonocaEditor,
    // UnknowJSNote
  },
  data() {
    return {
      elements: [],
      script: '',
    }
  },
  computed: {},
  watch: {},
  methods: {
    clickEditor(event) {
      console.info(event)
    },
    chapterChanged(volume, part, chapter, chapterName) {
      const volumeNames = ['upper', 'middle', 'lower']
      import(`@/assets/notes/${volumeNames[volume]}/part${part + 1}/${chapter + 1}.ts`)
        .then(module => {
          this.elements = module.config[chapterName]
          this.script = module.handler

        })
        .catch(err => {
          this.elements = [['h1', '暂无数据']]
          console.error(err.message)
        });
    },
  }
}
</script>
<style scoped lang="less">
.unknow-js-container {
  text-align: left;
}
</style>
