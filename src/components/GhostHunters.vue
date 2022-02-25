<template>
  <section>
    <h2>Hunters</h2>
    <ul>
      <li v-for="hunter in hunters" :key="hunter.id">{{ hunter.name }}</li>
    </ul>
  </section>
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
