import axios from "axios";

import { errorManager } from "@/utils/errorManager";
import { HOST_API } from "@/config/site";

export const fetchUser = async () => {
  try {
    const response: any = await axios.get(HOST_API + " endpoints.auth.user");

    if (response.status > 300) {
      errorManager(
        response?.status,
        response?.message ? response?.message : null
      );
    }

    const result = await response?.data;

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// ! Support
export const updateSupport = async (data: any) => {
  try {
    const response: any = await axios.post(
      HOST_API + "endpoints.support.update",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status > 300) {
      errorManager(
        response?.status,
        response?.message ? response?.message : null
      );
    }
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    return response;
  } catch (error: any) {
    return error;
  }
};

// ! BLOG POST BY ID
export const getBlogPostById = async (id: string) => {
  const url = HOST_API + "endpoints.admin.blog.getDetail";

  try {
    const response: any = await axios.get(url + `/${id}`);

    if (response.status > 300) {
      return response;
    }
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    return response;
  } catch (error: any) {
    return error;
  }
};
