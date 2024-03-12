<script setup>
import { useCategorySingle } from "@/stores/categorySingleStore"
import Card from "@/components/card/Card.vue"
import { useRoute } from "vue-router"
import { ref, computed } from "vue"

const route = useRoute()
const categoryStore = useCategorySingle()
categoryStore.getCategorySingle(route.params.category)

const searchText = ref("");

const filteredCategory = computed(() => {
  const searchLowerCase = searchText.value.toLowerCase();
  return categoryStore.categories
    ? categoryStore.categories.filter((item) =>
        item.strMeal.toLowerCase().includes(searchLowerCase)
      )
    : [];
});

const resetInput = () => {
  searchText.value = "";
};
</script>

<template>
  <section class="category">
    <div class="container">
      <div class="category__top">
        <h2 class="category__title">Category</h2>
        <form class="form">
          <input
            class="input"
            v-model="searchText"
            placeholder="Type your text"
            required
            type="text"
          />
          <button class="reset" type="button" @click="resetInput">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div class="category__cards">
        <Card
          v-for="item in filteredCategory"
          :key="item.idMeal"
          :card="item"
          :isBtn="false"
        />
      </div>
    </div>
  </section>
</template>
