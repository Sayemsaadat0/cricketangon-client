"use client";

import axiousResuest from "@/lib/axiosRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["category_list"],
    queryFn: () =>
      axiousResuest({
        url: `/category`,
        method: "get",
      }),
  });
};

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
