import { createSlice } from "@reduxjs/toolkit";
import i18next from "../config/i18n";
const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    setlang(state, action) {
      state.lang = action.payload.lang;
      return state;
    },
  },
});

export const { setlang } = langSlice.actions;
export const changeLang = value => dispatch => {
  i18next.changeLanguage(value);
  dispatch(setlang({ lang: value }));
};
export default langSlice.reducer;
