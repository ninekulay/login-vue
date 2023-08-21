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
    const response = axios.post(`${process.env.VUE_APP_URL_SILO}/login`, {
      user: email,
      password: "meismeis",
    });
    if (response.status === 200) {
      setTimeout(() => {
        location.href = `${process.env.VUE_APP_URL_SILO}/login`;
      }, 200);
    } else {
      alert("ไม่สามารถเข้าระบบ");
    }
  } catch (error) {
    console.error("Error :", error);
    throw error; // Rethrow the error for the caller to handle
  }
}
