import { defineStore } from "pinia";
import { useMealsStore } from "./mealsStore";
import { useCategorySingle } from "./categorySingleStore";

export const useFavouriteStore = defineStore("favourite", {
  state: () => ({
    favourites: [],
    favIds: []
  }),
  actions: {
    getAddFavMeal(id) {
      const mealsStore = useMealsStore();
      const categorySingle = useCategorySingle();
      const favMeal = mealsStore.meals?.find((item) => item.idMeal == id);
      const favCategory = categorySingle.categories?.find((item) => item.idMeal == id);

      const indexInFavourites = this.favourites.findIndex(
        (item) => item.idMeal === id
      );
      
      const favIdIndex = this.favIds?.findIndex(item => item == id)

      if (indexInFavourites !== -1) {
        // Meal is already in favourites, remove it
        this.favourites.splice(indexInFavourites, 1);
        this.favIds.splice(favIdIndex, 1)
      } else {
        // Meal is not in favourites, add it
        this.favIds.push(id)
        if (favMeal) {
          this.favourites.push(favMeal);
        } else if (favCategory) {
          this.favourites.push(favCategory);
        }
      }
    },
    removeProduct(id) {
      const indexToRemove = this.favourites.findIndex(
        (item) => item.idMeal === id
      );
      const favIdIndex = this.favIds?.findIndex(item => item == id)
      if (indexToRemove !== -1) {
        this.favourites.splice(indexToRemove, 1);
        this.favIds.splice(favIdIndex, 1)
      }
    },
  },
  persist: true
});
