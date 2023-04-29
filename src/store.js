import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/auth.reducer";
import productReducer from "./redux/reducers/product.reducer";
import todoListReducer from "./redux/reducers/todolist.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import reviewReducer from "./redux/reducers/review.reducer";
import cartReducer from "./redux/reducers/cart.reducer";
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
    review: reviewReducer,
    cart: cartReducer,
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
