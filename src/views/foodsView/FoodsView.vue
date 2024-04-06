<script setup>
import Card from '@/components/card/Card.vue'
import { useMealsStore } from '@/stores/mealsStore'
import { ref, computed } from "vue";

const mealsStore = useMealsStore();
mealsStore.getMeals();

const searchText = ref('');

const filteredMeals = computed(() => {
    const searchLowerCase = searchText.value.toLowerCase();
    return mealsStore.meals ? mealsStore.meals.filter(item =>
        item.strMeal.toLowerCase().includes(searchLowerCase)
    ) : [];
});

const resetInput = () => {
    searchText.value = '';
};
</script>

<template>
    <section class="foods">
        <div class="container">
            <div class="foods__top">
                <h2 class="foods__top-title">Foods</h2>
                <form class="form">
                    <input class="input" v-model="searchText" placeholder="Type your text" required="" type="text">
                    <button class="reset" type="button" @click="resetInput">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
            </div>
            <div class="foods__card">
                <Card v-for="item in filteredMeals" :key="item.idMeal" :card="item" :isBtn="true" />
                <p class="foods__card-text" v-if="filteredMeals.length === 0">Biz siz qidirayotgan narsani topa olmadik</p>
            </div>
        </div>
    </section>
</template>
