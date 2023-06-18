<template>
  <div class="input-form">
    <form class="input-form-group">
      <span class="input-form-group__btn-search">
        <ts-icon-base name="search" />
      </span>
      <input
        type="text"
        v-model="album"
        class="input-form-group__input-search"
        placeholder="Search Transactions and Documents"
      />
    </form>
    <button
      @click="getPhotos"
      type="submit"
      class="input-form-group__btn-submit"
    >
      <img src="@/assets/icons/btn-submit-input.png" alt="btn-submit-input" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import tsIconBase from "@/components/Shared/ts-icon-base.vue";

export default defineComponent({
  name: "ts-input-form",
  components: {
    tsIconBase,
  },
  data() {
    return {
      album: "",
    };
  },
  props: ["fetchFncFlex", "fetchFncGrid"],
  methods: {
    getPhotos() {
      this.$emit("getNumber", this.album);
      this.album = "";
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/layouts/common/mixins";
</style>