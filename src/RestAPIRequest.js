import axios from 'axios';

const url = 'http://192.168.219.105:8090';

export const httpGetMethod = async ({
  api,
  data,
  setData = null,
  setPercentage = null,
  setLoading,
}) => {
  try {
    const response = await axios.get(`${url}${api}`, {
      params: data,
    });
    // 데이터를 상태에 저장
    if (setData) {
      setData(response.data);
    }
    if (setPercentage) {
      setPercentage(response.data);
    }
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

export const httpPostMethod = async ({api, data, setLoading}) => {
  try {
    const response = await axios.post(`${url}${api}`, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
