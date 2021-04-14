<template>
  <a-drawer
      title="Thông báo"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      width="500"
  >
    <a-list item-layout="horizontal" :data-source="notifies">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
            description="1/1/2021 00:00:00"
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>

        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-drawer>
</template>

<script>
const notifies = [
  {
    title: 'Thông báo 1',
  },
  {
    title: 'Thông báo 1',
  },
  {
    title: 'Thông báo 1',
  },
  {
    title: 'Thông báo 1',
  },
];
export default {
  name: "DrawerComponent",
  props: ["showDrawer", "onClose", "visible"],
  data() {
    return {
      notifies
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },

  },
}
</script>

<style scoped>

</style>
