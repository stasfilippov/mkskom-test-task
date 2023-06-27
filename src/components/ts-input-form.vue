<template>
  <div class="input-form">
    <form class="input-form-group" @submit.prevent="getPhotos">
      <span class="input-form-group__btn-search">
        <ts-icon-base name="search" />
      </span>
      <input
        type="text"
        v-model.trim="album"
        class="input-form-group__input-search"
        placeholder="Search Transactions and Documents"
      />
    </form>
    <button
      @click.prevent="getPhotos"
      type="submit"
      class="input-form-group__btn-submit"
    >
      <ts-icon-base name="arrow-right" class="input-form-group__submit-icon" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import tsIconBase from "@/components/Shared/ts-icon-base.vue";
import { useVuelidate } from "@vuelidate/core";
import { maxValue, numeric, required } from "@vuelidate/validators";

export default defineComponent({
  name: "ts-input-form",
  components: {
    tsIconBase,
  },
  data() {
    return {
      v$: useVuelidate(),
      album: "",
    };
  },
  props: ["fetchFncFlex", "fetchFncGrid"],
  methods: {
    getPhotos() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("getNumber", this.album);
        this.album = "";
      } else {
        alert("Введите в поле число от 1 до 100!");
        this.album = "";
      }
    },
  },
  validations() {
    return {
      album: {
        required,
        numeric,
        maxValue: maxValue(100),
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/layouts/common/mixins";
</style>