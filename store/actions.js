import axios from "axios";
// import cookie from "js-cookie";

export const ACTIONS = {
  NOTIFY: "NOTIFY",
  DEMOPOPUP: "DEMOPOPUP",
  LOADING: "LOADING",
  //   AUTH: "AUTH",
};

export const blogAdd = async (payload) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.baseUrl}/v1/blog/add`,
      data: payload,
    });
    return response.data;
  } catch (err) {
    return { success: false, message: err.response.data.message };
  }
};
export const tagAdd = async (payload) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.baseUrl}/v1/tag/add`,
      data: payload,
    });
    return response.data;
  } catch (err) {
    return { success: false, message: err.response.data.message };
  }
};

export const tagsGet = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.baseUrl}/v1/tag/get`,
    });
    return response.data;
  } catch (err) {
    return { success: false, message: err.response.data.message };
  }
};

export const blogsGet = async (tag, activePage) => {
  if (!tag) tag = "";
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.baseUrl}/v1/blog/get?page=${activePage}&tag=${tag}`,
    });
    return response.data;
  } catch (err) {
    return { success: false, message: err.response.data.message };
  }
};
