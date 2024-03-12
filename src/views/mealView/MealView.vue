<script setup>
import { useRoute } from 'vue-router'
import { useMealSingleStore } from '@/stores/mealSingleStore'

const route = useRoute()
const mealSingleStore = useMealSingleStore()
mealSingleStore.getSingleMeal(route.params.id)


</script>


<template>
    <section class="meal">
        <div class="container">
            <h2 class="meal__title">{{ mealSingleStore.meal?.strMeal }}</h2>
            <div class="meal__content">
                <img :src="mealSingleStore.meal?.strMealThumb" alt="" class="meal__content-img">
                <ul class="meal__content-list">
                    <li class="meal__content-item" v-for="item in 8" :key="item">
                        <span class="meal__content-ingredient"> {{ mealSingleStore.meal ?.['strIngredient' + (item + 1)] }}: </span>
                        <span class="meal__content-measure"> {{ mealSingleStore.meal ?.['strMeasure' + (item + 1)] }} </span>
                    </li>
                </ul>
                <p class="meal__content-txt">{{ mealSingleStore.meal?.strInstructions }}</p>
            </div>
        </div>
    </section>
</template>