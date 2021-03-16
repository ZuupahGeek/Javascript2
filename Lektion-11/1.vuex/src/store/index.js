import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: "1", name: 'Products 1', price: 200 },
      { id: "2", name: 'Products 2', price: 300 },
      { id: "3", name: 'Products 3', price: 559 },
      { id: "4", name: 'Products 4', price: 636 },
      { id: "5", name: 'Products 5', price: 454 },
      { id: "6", name: 'Products 6', price: 222 },
      { id: "7", name: 'Products 7', price: 525 },
      { id: "8", name: 'Products 8', price: 626 },
      { id: "9", name: 'Products 9', price: 343 },
      { id: "10", name: 'Products 10', price: 345},
      { id: "11", name: 'Products 11', price: 257 },
      { id: "12", name: 'Products 12', price: 324 },
      { id: "13", name: 'Products 13', price: 4566 },
      { id: "14", name: 'Products 14', price: 4788 },
      { id: "15", name: 'Products 15', price: 23 },
    ],
    product: null,
    comp: 'Grid',
    searchValue: '',
  },
  getters: {
    taxedProducts: state => {
      let taxedProducts = state.products.map(product => {
        return {
          ...product,
          name: product.name + ' + tax',
          price: Math.round(product.price * 1.2)
        }
      })

      return taxedProducts
    },
    comp: state => state.comp,
    product: state => state.product,
    filteredProducts: (state, getters) => {
      // return state.products.filter(product => product.name.match(state.searchValue))
      return getters.taxedProducts.filter(product => product.name.toLowerCase().match(state.searchValue.toLowerCase()))
    }
    // products: state => state.products
  },
  mutations: {
    ADD: (state, amount) => {
      state.products.forEach(product => {
        product.price += amount
      })
    },
    SUB: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount
      })
    },
    CHANGE_COMP: (state, payload) => {
      state.comp = payload
    },
    SET_PRODUCT: (state, id) => {
      let prod = state.products.filter(p => p.id === id)[0]
      state.product = {
        ...prod,
        taxPrice: Math.round(prod.price + prod.price * 0.2)
      }
    },
    SEARCH: (state, value) => {
      state.searchValue = value
    }
  },
  actions: {
 
    subAsync: ({ commit }, amount) => {
     setTimeout(() => {
       commit('SUB', amount)
     }, 3000)
  },
  addToPrice: ({commit }, amount) => {
    commit('ADD', amount)
  },
  changeComp: ({commit}, component) => {
    commit('CHANGE_COMP', component)
  },
  getProduct: ({commit}, id) => {
    commit('SET_PRODUCT', id)
  },
  search: ({commit}, value) => {
    commit('SEARCH', value)
  }
}

})
