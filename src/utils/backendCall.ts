import axios from "axios";

export const backendCall = async (
  {
    url,
    method = "POST",
    data,
    isNavigate = true,
    isShowErrorMessage = true,
    contentType = "application/json" }: backendCall
) => {
  const _headers = {
    "Content-Type": contentType,
    // Authorization: "Bearer " + localStorage.getItem("token") || "",
  };

  let _response = "";
  await axios(process.env.REACT_APP_BaseUrl + url, {
    method: method,
    data: data,
    headers: _headers,
  })
    .then((response) => {
      _response = response.data;
    })
    .catch((error) => {
      let _responseData = error;
      if (isShowErrorMessage) {
        // handleToastMessage("error", _responseData.message);
        console.log("error ==", _responseData)
      }
      _response = _responseData;
      if (error.response.status === 401 && isNavigate) {
        window.location.replace("/");
        localStorage.clear();
      }
    });

  return _response;
};
interface backendCall {
  url: string,
  method: string,
  data: any,
  isNavigate: boolean,
  isShowErrorMessage: boolean,
  contentType: string,
}