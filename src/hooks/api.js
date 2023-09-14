import axios from "axios";
import { useEffect, useState } from "react";

export const UsefetchData = (api) => {
  const [info, setinfo] = useState();
  useEffect(() => {
    const getdata = async () => {
      try {
        const { data } = await axios.get(api);
        setinfo(data.topic[0].details);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, [api]);
  return info;
};
