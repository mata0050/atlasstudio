import api from '../../utils/api';
const API_URL = 'api/pose';

// Get all pose
const getAllPose = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

// Add a pose
const addPose = async (formData) => {
  const response = await api.post(API_URL, formData);
  return response.data;
};

const poseService = {
  getAllPose,
  addPose,
};

export default poseService;
