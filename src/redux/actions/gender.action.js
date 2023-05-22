import { createAction } from "@reduxjs/toolkit";
import { GENDER_ACTION, REQUEST } from "../constants";

export const getGenderListAction = createAction(
  REQUEST(GENDER_ACTION.GET_GENDER_LIST)
);
