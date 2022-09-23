import axios from "axios";
// import cookie from "js-cookie";

export const ACTIONS = {
  NOTIFY: "NOTIFY",
  DEMOPOPUP: "DEMOPOPUP",
  LOADING: "LOADING",
  //   AUTH: "AUTH",
};

export const LearnerRegisterForDemo = async (payload) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.baseUrl}/v1/learner/register`,
      data: payload,
    });
    return response.data;
  } catch (err) {
    return { success: false, message: err.response.data.message };
  }
};

export const sendMail = (type, message) => {
  //type: visitor, event
  try {
    axios({
      method: "POST",
      url: `${process.env.baseUrl}/v1/general/sendmail/${type}`,
      data: { message },
    });
  } catch (err) {}
};
