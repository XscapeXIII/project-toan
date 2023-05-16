import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/auth.reducer";
import productReducer from "./redux/reducers/product.reducer";
import todoListReducer from "./redux/reducers/todolist.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import genderReducer from "./redux/reducers/gender.reducer";
import reviewReducer from "./redux/reducers/review.reducer";
import cartReducer from "./redux/reducers/cart.reducer";
import orderReducer from "./redux/reducers/order.reducer";
import locationReducer from "./redux/reducers/location.reducer";
import commonReducer from "./redux/reducers/common.reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    todo: todoListReducer,
    category: categoryReducer,
    gender: genderReducer,
    review: reviewReducer,
    cart: cartReducer,
    order: orderReducer,
    location: locationReducer,
    common: commonReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
