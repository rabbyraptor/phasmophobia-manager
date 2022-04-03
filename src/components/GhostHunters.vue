<template>
  <b-container class="py-2" fluid>
    <b-row align-h="center" align-v="center">
      <b-col>
        <div class="hunters pl-4 pt-4">
          <h2>Hunters:</h2>
          <ul>
            <li v-for="hunter in hunters" :key="hunter.id">
              {{ hunter.name }}
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      hunters: this.$store.getters.hunters,
    };
  },
};
</script>

<style></style>
