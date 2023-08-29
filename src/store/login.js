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
    // console.error("Error :", error);
    alert("ไม่สามารถเข้าสู่ระบบได้ AD กรุณาติดต่อ Admin");
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
    if (error.response && error.response.status === 404) {
      // Handle 404 error
      if (error.response.statusText == "Not Found") {
        alert("ไม่พบข้อมูลผู้ใช้ในระบบ กรุณาติดต่อ Admin");
      }
      throw new Error("Data not found");
    } else {
      // Handle other errors
      console.error("Error :", error);
      throw error; // Rethrow the error for the caller to handle
    }
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
