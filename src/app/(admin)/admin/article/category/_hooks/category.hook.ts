"use client";

import axiousResuest from "@/lib/axiosRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";



export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiousResuest({
        url: `/category`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category_list"] });
    },
  });
};
