"use client";

import axiousResuest from "@/lib/axiosRequest";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import useStoreLoginUserId from "@/store/useStoreLoginUserId";

// Define the structure of the decoded token
interface DecodedToken {
  name: string;
  email: string;
  role: string;
  id: number;
  exp: number; // You can add other fields if necessary
}

// Response structure from the login API
interface LoginResponse {
  data: any;
  success: boolean;
  accessToken: string;
}

export const useSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/users`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { setId } = useStoreLoginUserId();

  return useMutation<LoginResponse, Error, any>({
    mutationFn: async (body: any) => {
      const response = await axiousResuest({
        url: `/auth/login`,
        method: "post",
        data: body,
      });

      return response.data; // Return the response to be used in onSuccess
    },
    onSuccess: (data) => {
      // return console.log('data', data);
      if (data?.accessToken) {
        try {
          // Decode the JWT token to extract the name
          const decodedToken: DecodedToken = jwtDecode(data.accessToken);
          console.log(decodedToken);
          setId(decodedToken?.id);
          Cookies.set("role", decodedToken?.role);
          queryClient.invalidateQueries({ queryKey: ["users"] });
        } catch (error) {
          console.error("Error decoding token:", error);
          // Optionally: handle token decoding errors here
        }
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
      // Optionally: handle login errors here (e.g., show an error message)
    },
  });
};
