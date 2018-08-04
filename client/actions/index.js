import uid from 'uid';
//Action Creator
export const fetchSectionProducts = (section) => {
  return {
    type: 'FETCH_SECTION_PRODUCTS',
    section: section
  }
}
export const fetchProductDetails = (productId) => {
  return {
    type: 'FETCH_PRODUCT_DETAILS',
    productId
  }
}
export const fetchCartData = (userId) => {
  return {
    type: 'FETCH_CART_DATA',
    userId
  }
}
export const loadSectionProducts = (sectionData,cartData) => {
  return {
    type: 'LOAD_SECTION_PRODUCTS',
    sectionData: sectionData,
    cartData: cartData
  }
}
export const loadProductData = (productData) => {
  return {
    type: 'LOAD_PRODUCT_DATA',
    productData: productData,
  }
}

export const loadCartData = (cartData) => {
  return {
    type: 'LOAD_CART_DATA',
    cartData: cartData
  }
}
export const addToCart = (productId,price,name,imgPath,quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
        cartId: uid(),
        userId: 1, //remove hardcoding,
        quantity: quantity,
        productDetails: {price,productId,name,imgPath}
    }
  }
}
export const addToCartUI = (productId) => {
  return {
    type: 'ADD_TO_CART_UI',//no reducer yet
    productId: productId
  }
}

