<template>
  <a-form id="components-form-demo-validate-other" :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="Select" has-feedback>
      <a-select
        v-decorator="[
          'select',
          {rules: [{ required: true, message: 'Please select your country!' }]}
        ]"
        placeholder="Please select a country"
      >
        <a-select-option value="china">China</a-select-option>
        <a-select-option value="usa">U.S.A</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Select[multiple]">
      <a-select
        v-decorator="[
          'selectMultiple', {
            rules: [{ required: true, message: 'Please select your favourite colors!', type: 'array' }],
          }]"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <a-select-option value="red">Red</a-select-option>
        <a-select-option value="green">Green</a-select-option>
        <a-select-option value="blue">Blue</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Dragger">
      <div class="dropbox">
        <a-upload-dragger
          v-decorator="['dragger', {
            rules: [{ required: true, message: 'Please select photos!'}],
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          }]"
          :multiple="true"
          name="files"
          action
          list-type="picture"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </a-upload-dragger>

        <a-button id="buton" type="primary" html-type="submit">Submit</a-button>
      </div>
    </a-form-item>

    <!-- <a-form-item
      :wrapper-col="{ span: 12, offset: 6 }"
    >
      <a-button
      id="buton"
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>-->
  </a-form>
</template>

<script>
export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      const formData = new FormData();
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
        //   console.log(values);

          for (let image of values.dragger) {
            formData.append("photos", image.originFileObj);
          }
          formData.append("country", values.select);
          for (let color of values.selectMultiple) {
            formData.append("color", color);
          }

          this.$axios.post("http://localhost:8000/photos/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
        }
      });
    },
    normFile(e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }
};
</script>
<style>
#buton {
  margin-top: 20px;
}
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>