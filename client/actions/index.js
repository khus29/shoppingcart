import uid from "uid";
//Action Creator
export const fetchSectionProducts = section => {
  return {
    type: "FETCH_SECTION_PRODUCTS",
    section: section
  };
};
export const fetchCategoryTypes = section => {
  return {
    type: "FETCH_CATEGORY_TYPES",
    section: section
  };
};
export const fetchProductDetails = productId => {
  return {
    type: "FETCH_PRODUCT_DETAILS",
    productId
  };
};
export const fetchCartData = () => {
  return {
    type: "FETCH_CART_DATA"
  };
};
export const clearCartData = () => {
  return {
    type: "CLEAR_CART_DATA"
  };
};
export const deleteCartItem = cartId => {
  return {
    type: "DELETE_CART_ITEM",
    cartId
  };
};

export const loadSectionProducts = (sectionData, cartData) => {
  return {
    type: "LOAD_SECTION_PRODUCTS",
    sectionData: sectionData,
    cartData: cartData
  };
};
export const loadProductData = productData => {
  return {
    type: "LOAD_PRODUCT_DATA",
    productData: productData
  };
};
export const loadFilters = categories => {
  return {
    type: "LOAD_FILTERS",
    categoryTypes: categories
  };
};
export const loadCartData = cartData => {
  return {
    type: "LOAD_CART_DATA",
    cartData: cartData
  };
};
export const createUser = (name, password, email) => {
  return {
    type: "CREATE_USER",
    payload: {
      userId: uid(),
      name,
      email,
      password
    }
  };
};
export const addToCart = (productId, price, name, imgPath, quantity) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      cartId: uid(),
      quantity: quantity,
      productDetails: { price, productId, name, imgPath }
    }
  };
};
export const handleFilterAction = (categoryId, section) => {
  return {
    type: "HANDLE_FILTER_ACTION",
    categoryId,
    section
  };
};
export const loginUser = () => {
  return {
    type: "DO_LOGIN"
  };
};
export const addToCartUI = productId => {
  return {
    type: "ADD_TO_CART_UI", //no reducer yet
    productId: productId
  };
};
