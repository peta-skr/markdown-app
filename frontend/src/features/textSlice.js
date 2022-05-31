import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import textService from "./textService";

const initialState = {
  texts: [],
  openFiles: [],
  text: { id: "", title: "", text: "" },
};

export const getTexts = createAsyncThunk("getTexts", async (_, thunkAPI) => {
  try {
    return await textService.getTexts();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const saveText = createAsyncThunk("saveText", async (data, thunkAPI) => {
  try {
    return await textService.saveText(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateText = createAsyncThunk(
  "updateText",
  async (data, thunkAPI) => {
    try {
      return await textService.updateText(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    selectText: (state, action) => {
      const text = action.payload;
      state.text = { id: text._id, title: text.title, text: text.text };
      if (!state.openFiles.find((item) => item.id === text._id)) {
        state.openFiles = [
          ...state.openFiles,
          { id: text._id, title: text.title, text: text.text },
        ];
      }
    },
    changeTitle: (state, action) => {
      const title = action.payload;
      state.text.title = title;
    },
    changeText: (state, action) => {
      const text = action.payload;
      state.text.text = text;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTexts.fulfilled, (state, action) => {
        state.texts = action.payload;
      })
      .addCase(saveText.fulfilled, (state, action) => {
        const text = action.payload;
        state.texts = [
          ...state.texts,
          { id: text._id, title: text.title, text: text.text },
        ];
        state.text = { id: text._id, title: text.title, text: text.text };
        state.openFiles = [
          ...state.openFiles,
          { id: text._id, title: text.title, text: text.text },
        ];
      })
      .addCase(updateText.fulfilled, (state, action) => {
        state.texts = state.texts.map((text) => {
          if (text.id === action.payload._id) {
            return action.payload;
          } else {
            return text;
          }
        });
        console.log(state.texts);
      });
  },
});

export const { selectText, changeText, changeTitle } = textSlice.actions;

export default textSlice.reducer;
