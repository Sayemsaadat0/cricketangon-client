"use client";

import axiousResuest from "@/lib/axiosRequest";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import useStoreLoginUserId from "@/store/useStoreLoginUserId";
import useEmailStore from "@/store/useEmailStore";

interface DecodedToken {
  name: string;
  email: string;
  role: string;
  id: number;
  exp: number;
}

interface LoginResponse {
  data: any;
  success: boolean;
  accessToken: string;
}

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) => {
      const response = await axiousResuest({
        url: `/users`,
        method: "post",
        data: body,
      });
      return response;
    },
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

      return response.data;
    },
    onSuccess: (data) => {
      if (data?.accessToken) {
        try {
          const decodedToken: DecodedToken = jwtDecode(data.accessToken);
          console.log(decodedToken);
          setId(decodedToken?.id);
          Cookies.set("role", decodedToken?.role);
          queryClient.invalidateQueries({ queryKey: ["users"] });
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

// not working
// export const useSendOtpToEmail = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (body: any) =>
//       await axiousResuest({
//         url: `/auth/forgot-password`,
//         method: "post",
//         data: body,
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["forget_password"] });
//     },
//   });
// };

export const useMatchOtp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/auth/verify-code`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forget_password"] });
    },
  });
};

export const useForgetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/auth/reset-password`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forget_password"] });
    },
  });
};