"use client";

import axiousResuest from "@/lib/axiosRequest";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
// import { useSession } from "next-auth/react";

export const useSignup = () => {
  const queryClient = useQueryClient();
//   const { data: session }: any = useSession();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/users`,
        method: "post",
        data: body,
        // headers: {
        //   Authorization: `Bearer ${session?.accessToken}`,
        // },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};