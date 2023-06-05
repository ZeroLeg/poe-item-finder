<script setup lang="ts">
import EditorJS from '@editorjs/editorjs'
import CodeTool from '@editorjs/code'

const editor = new EditorJS({
  placeholder: 'Haz click para introducir la query',
  tools: {
    code: CodeTool
  },
  defaultBlock: 'code'
})
</script>

<template>
  <div class="card shadow rounded">
    <div class="card-body">
      <h5 class="card-title">Import:</h5>
      <div id="editorjs"></div>
    </div>
  </div>
</template>
<style></style>
