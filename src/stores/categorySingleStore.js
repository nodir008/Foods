import apiMeals from '@/helpers/api/api'
import { defineStore } from 'pinia'

export const useCategorySingle = defineStore('categorySingle', {
  state: () => ({
    name: null,
    categories: []
  }),
  actions: {
    async getCategorySingle(name) {
      try {
        const res = await apiMeals.getCategorySingle(name)
        // this.category = res.meals
        this.categories = res.meals.map(item => ({...item, strCategory: name}))
        // console.log(this.categories);
      } catch (error) {
        console.error(error);
      }
    },
  }
})