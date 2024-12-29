"use client";

import axiosRequest from "@/lib/axiosRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Fetch all articles
export const useGetArticles = () => {
  return useQuery({
    queryKey: ["article_list"],
    queryFn: () =>
      axiosRequest({
        url: `/article`,
        method: "get",
      }),
  });
};
export const useGetSingleArticle = (id: string) => {
  return useQuery({
    queryKey: ["article_list"],
    queryFn: () =>
      axiosRequest({
        url: `/article/${id}`,
        method: "get",
      }),
  });
};

// Create a new article
export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/article`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article_list"] });
    },
  });
};

// Update an article
export const useUpdateArticle = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/article/${id}`,
        method: "patch",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article_list"] });
    },
  });
};

// Delete an article
export const useDeleteArticle = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      await axiosRequest({
        url: `/article/${id}`,
        method: "delete",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article_list"] });
    },
  });
};
