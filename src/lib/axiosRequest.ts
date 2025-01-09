import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiousResuest = async (options: AxiosRequestConfig) => {
  const onSuucess = (res: AxiosResponse) => {
    return res.data;
  };

  const onError = (err: AxiosError) => {
    // console.log(555, err.request.response)
    return err.response?.data;
  };

  return axios(options).then(onSuucess).catch(onError);
};

export default axiousResuest;
