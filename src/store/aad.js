import { UserAgentApplication } from "msal";

const msalConfig = {
  auth: {
    // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    clientId: "ac3bc627-30f8-46a3-9383-f28d341558f5",
    // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
    authority:
      "https://login.microsoftonline.com/5db8bf0e-8592-4ed0-82b2-a6d4d77933d4",
    // Full redirect URL, in form of http://localhost:3000
    // redirectUri: "https://www.qonnect-apps.com/doopoon",
    redirectUri: "http://localhost:8080",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

var requestObj = {
  scopes: ["user.read"],
};

var myMSALObj = new UserAgentApplication(msalConfig);

var getAccount = async () => {
  var account = await myMSALObj.getAccount();
  return account;
};

var login = async () => {
  try {
    var authResult = await myMSALObj.loginPopup(requestObj);
    return authResult.account;
  } catch {
    return null;
  }
};

var logout = () => {
  myMSALObj.logout();
};

export default {
  login,
  getAccount,
  logout,
};
