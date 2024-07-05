import axios from 'axios';

const url = 'http://192.168.219.102:8090';
const data = {userSeq: 7};

export const httpGetMethod = async ({api, data, setData, setLoading}) => {
  try {
    const response = await axios.get(`${url}${api}`, {
      params: data,
    });
    setData(response.data); // 데이터를 상태에 저장
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
