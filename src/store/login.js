import axios from "axios";

export async function LoginAd(data) {
  try {
    const response = await axios.get(process.env.VUE_APP_URL_AD, {
      params: {
        data,
      },
    });
    return response.data; // You can return the response data for further use
  } catch (error) {
    console.error("Error :", error);
    throw error; // Rethrow the error for the caller to handle
  }
}

export async function LamdaAcknow(data) {
  try {
    const response = await axios.get(process.env.VUE_APP_URL_LAMDA, {
      params: {
        data: data,
      },
    });
    return response.data; // You can return the response data for further use
  } catch (error) {
    console.error("Error :", error);
    throw error; // Rethrow the error for the caller to handle
  }
}

export function LoginSilo(email) {
  try {
    setTimeout(() => {
      // console.log(
      //   `${process.env.VUE_APP_URL_SILO}/d/qEWlL2RSk/login-scg?orgId=1&data=${email}&kiosk`
      // );
      location.href = `${process.env.VUE_APP_URL_SILO}/d/qEWlL2RSk/login-scg?orgId=1&data=${email}&kiosk`;
    }, 200);
  } catch (error) {
    console.error("Error :", error);
    throw error; // Rethrow the error for the caller to handle
  }
}
