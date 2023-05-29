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

.input-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 430px;
  background-color: $bgColorBtns;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(38, 51, 77, 0.03);
  border-radius: 30px;
}

.input-form-group {
  display: flex;
  align-items: center;
  padding: 5px;
}

.input-form-group__btn-search {
  margin-right: 17px;
}

.input-form-group__input-search {
  text-decoration: none;
  min-width: 220px;
  border: none;
  @include font(#adb8cc, 12px, 700, 20px);

  &::placeholder {
    @include font(#adb8cc, 12px, 700, 20px);
  }
}

.input-form-group__btn-submit {
  background-color: $bgColorBtns;
  border: none;
  padding: 9px 12px;
}
</style>