import axios from 'axios'

export function queryBrewery (query) {
  console.log('looking for that fency beer')
  const term = query.replace(/\s/, '+') // replaces spaces in the query link
  const URL = 'https://dbc-project3-backend.herokuapp.com/search/' + term

  return axios.get(URL).then(res => {
    console.log(`axios got this: ${res}`)
    let beers = res.data.map(beer => beer)
    return beers
  })
}

export function buyBeer (beer) {
  axios
    .post('https://dbc-project3-backend.herokuapp.com/buy/' + beer)
    .then(() => {
      console.log('Beer added to cart')
    })
}

export function queryCart () {
  console.log('looking in the cart')
  const URL = 'https://dbc-project3-backend.herokuapp.com/cart'

  return axios.get(URL).then(res => {
    console.log(`axios got this: ${res}`)
    console.log(res.data)
    let shoppingCart = res.data.map(cart => cart)
    return shoppingCart
  })
}

export function deleteItemFromCart (id) {
  axios
    .delete(`https://dbc-project3-backend.herokuapp.com/cart/remove/` + id)
    .then(() => {
      console.log('Beer removed from cart')
    })
}

export function updateCartItemQuantity (qnt, id) {
  console.log({qnt})
  axios
    .put(`https://dbc-project3-backend.herokuapp.com/cart/update/` + id, qnt)
    .catch(err => {
      console.log(err)
    })
}
