<template>
  <div id="modal-wrapper">
    <!-- Main Menu Modal Template -->
    <b-modal
      id="modal-main-menu"
      title="Main Menu"
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
        <h5>Main menu</h5>
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
    <!-- Main Menu END -->

    <!-- Cash Modal Template -->
    <b-modal
      id="modal-cash"
      title="Cash"
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
        <h5>Cash</h5>
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
    <!-- Cash END -->

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

    <!-- Journal Modal Template -->
    <b-modal
      id="modal-journal"
      title="Journal"
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
        <h5>Journal</h5>
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
    <!-- Journal END -->

    <!-- Inventory Modal Template -->
    <b-modal
      id="modal-inventory"
      title="Inventory"
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
        <h5>Inventory</h5>
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
    <!-- Inventory END -->

    <!-- Equipment Modal Template -->
    <b-modal
      id="modal-equipment"
      title="Equipment"
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
        <h5>Equipment</h5>
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
    <!-- Equipment END -->

    <!-- Areas Modal Template -->
    <b-modal
      id="modal-areas"
      title="Areas"
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
        <h5>Areas</h5>
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
    <!-- Areas END -->

    <!-- Evidence Modal Template -->
    <b-modal
      id="modal-evidence"
      title="Evidence"
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
        <h5>Evidence</h5>
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
    <!-- Evidence END -->

    <!-- Profile Modal Template -->
    <b-modal
      id="modal-profile"
      title="Profile"
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
        <h5>Profile</h5>
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
    <!-- Profile END -->

    <!-- Staff Modal Template -->
    <b-modal
      id="modal-staff"
      title="Staff"
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
        <h5>Staff</h5>
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
    <!-- Staff END -->

    <!-- Management Modal Template -->
    <b-modal
      id="modal-management"
      title="Management"
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
        <h5>Management</h5>
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
    <!-- Management END -->

    <!-- Finished contracts Modal Template -->
    <b-modal
      id="modal-finished-contracts"
      title="Finished contracts"
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
        <h5>Finished contracts</h5>
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
    <!-- Finished contracts END -->

    <!-- Active contracts Modal Template -->
    <b-modal
      id="modal-active-contracts"
      title="Active contracts"
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
        <h5>Active contracts</h5>
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
    <!-- Active contracts END -->

    <!-- Hunters Modal Template -->
    <b-modal
      id="modal-hunters"
      title="Hunters"
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
        <h5>Hunters</h5>
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
    <!-- Hunters END -->
    <!-- Contracts Modal Template -->
    <b-modal
      id="modal-contracts"
      title="Contracts"
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
        <h5>Contracts</h5>
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
    <!-- Contracts END -->
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

