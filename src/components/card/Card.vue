<script setup>
import { RouterLink } from "vue-router"
import { useFavouriteStore } from "@/stores/favoriteStore"
import FavouriteIcon from "@/assets/images/FavouriteIcon.vue"
import FavouriteIcon2 from "@/assets/images/FavouriteIcon2.vue"
import { ref } from "vue"

const favouriteStore = useFavouriteStore()

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  isBtn: Boolean,
})

const isActive = ref(false)
</script>

<template>
  <div class="card">
    <RouterLink :to="'/meal/' + card.idMeal"
      ><img
        class="card__img"
        :src="
          card.strMealThumb ? card.strMealThumb : '@/assets/images/noimage.jpg'
        "
        alt=""
    /></RouterLink>
    <div class="card__about">
      <h3 class="card__title">{{ card.strMeal }}</h3>
      <div class="card__theme">
        <div>
          <RouterLink
            v-if="isBtn"
            :to="'/category/' + card.strCategory"
          >
            <button class="btn-17">
              <span class="text-container">
                <span class="text">{{ card.strCategory }}</span>
              </span>
            </button>
          </RouterLink>
        </div>

        <button
          class="card__theme-btn"
          @click="
            favouriteStore.getAddFavMeal(card.idMeal), (isActive = !isActive)
          "
          :class="{
            active: favouriteStore.favIds?.find((item) => item == card.idMeal),
          }"
        >
          <FavouriteIcon2  />
          <!-- <FavouriteIcon v-else /> -->
        </button>
      </div>
    </div>
  </div>
</template>
