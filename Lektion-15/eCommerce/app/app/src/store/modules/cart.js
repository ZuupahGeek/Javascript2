
  const state = {
    cart: []
  }
  const getters = {
    shoppingCart: state => {
      if(sessionStorage.getItem('cart') !== null) {
        state.cart = JSON.parse(sessionStorage.getItem('cart'))
      }
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      if(state.cart.length !== 0) {
      state.cart.forEach(item => {
        items += item.quantity
      })
    }
      return items
    },
    // shoppingCartTotal: state => {
    //   let total = 0
    //   if(state.cart.length !== 0) {

    //   }
    // }
  }
  const mutations = {
    ADD_TO_CART: (state, item ) => { 
      let i = {
        ...item, 
        quantity: 1
      }
      state.cart.push(i)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    INCREMENT_QUANTITY: (state, {product, quantity}) => {
      let item = state.cart.find(i => i.product._id === product._id)
      item.quantity += Number(quantity)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DELETE_PRODUCT_FROM_CART: (state, id) => {
      state.cart = state.cart.filter(item => item.product._id !== id)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DECREMENT_QUANTITY: (state, item) => {
      item.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    }
  }
  const actions = {
    addProductToCart: ({commit}, { product, quantity }) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        commit('INCREMENT_QUANTITY', {product, quantity})
        return
      }
      commit('ADD_TO_CART', {product, quantity})
    },
    deleteProductFromCart: ({commit}, id) => {
      commit('DELETE_PRODUCT_FROM_CART', id)
    },
    incrementQuantity: ({commit}, item) => {
      let i = {
        ...item,
        quantity: 1
      }
      commit('INCREMENT_QUANTITY', i)
    },
    decrementQuantity: ({commit}, item) => {
      if(item.quantity <= 1) {
        commit('DELETE_PRODUCT_FROM_CART', item.product._id)
        return
      }
      commit('DECREMENT_QUANTITY', item)
    }
  }

  export default {
    state,
    getters,
    mutations,
    actions
  }