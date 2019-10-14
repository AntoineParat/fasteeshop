<template>
  <div>
    <section>
      <a-card hoverable :style="{width : '500px', display: 'flex', flexDirection : 'column'}">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="Card title"
          description="This is the description This is the description This is the description This is the description This is the description hzeoihoziefozief oihzefoihezfh "
        >
          <a-avatar slot="avatar" src="https://www.antoineparat.com/img/myAvatar.png" />
        </a-card-meta>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
      </a-card>

      <a-card hoverable :style="{width : '500px', display: 'flex', flexDirection : 'column'}">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="Card title"
          description="This is the description This is the description This is the description This is the description This is the description hzeoihoziefozief oihzefoihezfh  nzefnlknzef zefklk zefhzleflkzefkjef jnzef zefjk zefkjn "
        >
          <a-avatar slot="avatar" src="https://www.antoineparat.com/img/myAvatar.png" />
        </a-card-meta>
        <template class="ant-card-actions" slot="actions">
          <a-icon type="setting" />
          <a-icon type="edit" />
          <a-icon type="ellipsis" />
        </template>
      </a-card>
    </section>
    <div>
      <a-row type="flex" justify="space-between">
        <a-col :xs="24" :lg="11">
          <a-card title="Card Title" class="cc">
            <a href="#" slot="extra">more</a>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :lg="11">
          <a-card title="Card Title" class="cc">
            <a href="#" slot="extra">more</a>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let actions = document.querySelectorAll(".ant-card-body");
    for (let action of actions) {
      action.style.flexGrow = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
}
.cc {
  height: 100%;
}
</style>