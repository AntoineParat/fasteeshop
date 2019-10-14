<template>
  <div id="uploader">
  <a-upload-dragger name="file" :multiple="true" @change="normFile">
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">Cliquez ou glissez-déposez les fichiers ici</p>
  </a-upload-dragger>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
      console.log(info)
    },
    normFile  (e) {
      // console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
}
</script>

<style lang="scss" scoped>
#uploader {
  width : 500px;
  margin-left : auto;
  margin-right: auto;
}
</style>