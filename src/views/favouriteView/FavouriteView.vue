<script setup>
import { useFavouriteStore } from "@/stores/favoriteStore"
import { useCategorySingle } from "@/stores/categorySingleStore"
import FavouriteIcon2 from "@/assets/images/FavouriteIcon2.vue"
const favouriteStore = useFavouriteStore()
const categorySingle = useCategorySingle()
</script>

<template>
  <section>
    <div class="container">
      <div v-if="favouriteStore.favourites.length === 0" class="no__favorites">
        <img class="no__favorites-img" src="@/assets/images/uzum.png" alt="" />
        <h2 class="no__favorites-title">Sizga yoqqanini qoʻshing</h2>
        <p class="no__favorites-text">
          Mahsulotdagi
          <RouterLink to="/" class="no__favorites-heart">♡</RouterLink> belgini
          bosing va barcha saralanganlar saqlanib qoladi!
        </p>
      </div>
      <div v-else class="favourites">
        <h1 class="favourites__title">Foods Favourites</h1>
        <div class="favourites__cards">
          <div
            class="card"
            v-for="item in favouriteStore.favourites"
            :key="item.idMeal"
            :isBtn="true"
          >
            <div class="card2">
              <RouterLink :to="'/meal/' + item.idMeal"
                ><img
                  class="card__img"
                  :src="
                    item.strMealThumb
                      ? item.strMealThumb
                      : '@/assets/images/noimage.jpg'
                  "
                  alt=""
                />
              </RouterLink>
              <div class="card__about">
                <h3 class="card__title">{{ item.strMeal }}</h3>
                <div class="card__theme">
                  <div>
                    <RouterLink
                      v-show="(isBtn = true)"
                      :to="
                        '/category/' + item.strCategory || categorySingle.name
                      "
                    >
                      <button class="btn-17">
                        <span class="text-container">
                          <span class="text">{{
                            item.strCategory || categorySingle.name
                          }}</span>
                        </span>
                      </button>
                    </RouterLink>
                  </div>

                  <button
                    class="card__theme-btn active"
                    @click="favouriteStore.removeProduct(item.idMeal)"
                  >
                    <FavouriteIcon2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
