import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import poseService from './poseService';

const initialState = {
  allPoses: [],
  addPose: {
    title: null,
    pose_description: null,
    pose_image: null,
    etymology_origin: null,
    description: null,
    variations: null,
    see_also: null,
    reference: null,
    sources: null,
    further_reading: null,
    video_url: null,
    author_id: JSON.parse(localStorage.getItem('user')).userProfile.id,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get all pose
export const getAllPose = createAsyncThunk(
  'api/pose/getAllPose',
  async (thunkAPI) => {
    try {
      return await poseService.getAllPose();
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

// Add a pose
export const addPose = createAsyncThunk(
  'api/pose/addPose',
  async (formData, thunkAPI) => {
    try {
      return await poseService.addPose(formData);
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

export const poseSlice = createSlice({
  name: 'api/pose',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    onChangeAddPose: (state, action) => {
      state.addPose = { ...state.addPose, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPose.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPose.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allPoses = action.payload;
      })
      .addCase(getAllPose.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allPoses = [];
      })
      .addCase(addPose.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPose.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //
      })
      .addCase(addPose.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //
      });
  },
});
export const { reset, onChangeAddPose } = poseSlice.actions;
export default poseSlice.reducer;
