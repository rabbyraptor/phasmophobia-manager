<template>
  <div id="modal-wrapper">
    <!-- Points Modal Template -->
    <b-modal
      id="modal-points"
      title="Points"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <template #modal-header="{ close }">
        <b-icon
          class="h3 mb-2"
          icon="arrow-left-square"
          @click="close()"
        ></b-icon>
        <h5>Points</h5>
        <b-icon class="h3 mb-2" icon="x-circle-fill" @click="close()"></b-icon>
      </template>

      <template #default="">
        <p>Content here or as component</p>
      </template>

      <template #modal-footer="{ ok, cancel }">
        <b-button block variant="success" @click="ok()"> OK </b-button>
        <b-button block variant="danger" @click="cancel()">cancel</b-button>
      </template>
    </b-modal>
    <!-- Points END -->
  </div>
</template>

<script>
export default {
  name: "ModalsComponent",
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "dark",
      bodyTextVariant: "light",
      footerBgVariant: "dark",
      footerTextVariant: "light",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-header {
  background-color: blue;
}
</style>

