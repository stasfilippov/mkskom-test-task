<template>
  <div class="input-form">
    <form class="input-form-group">
      <span class="input-form-group__btn-search">
        <img src="@/assets/icons/btn-search-input.png" alt="" />
      </span>
      <input
        type="text"
        class="input-form-group__input-search"
        placeholder="Search Transactions and Documents"
      />
    </form>
    <button type="submit" class="input-form-group__btn-submit">
      <img src="@/assets/icons/btn-submit-input.png" alt="btn-submit-input" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ts-input-form",
});
</script>

<style scoped lang="scss">
@import "@/assets/layouts/common/mixins";
</style>