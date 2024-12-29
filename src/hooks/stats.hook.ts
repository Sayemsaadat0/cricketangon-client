"use client";

import axiosRequest from "@/lib/axiosRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Fetch all stats
export const useGetStats = () => {
  return useQuery({
    queryKey: ["stats_list"],
    queryFn: () =>
      axiosRequest({
        url: `/stats`,
        method: "get",
      }),
  });
};

// Fetch a single stat
export const useGetSingleStat = (id: string) => {
  return useQuery({
    queryKey: ["stat_detail", id],
    queryFn: () =>
      axiosRequest({
        url: `/stats/${id}`,
        method: "get",
      }),
  });
};

// Create a new stat
export const useCreateStat = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Record<string, any>) =>
      await axiosRequest({
        url: `/stats`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats_list"] });
    },
  });
};

// Update a stat
export const useUpdateStat = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Record<string, any>) =>
      await axiosRequest({
        url: `/stats/${id}`,
        method: "patch",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats_list"] });
    },
  });
};

// Delete a stat
export const useDeleteStat = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      await axiosRequest({
        url: `/stats/${id}`,
        method: "delete",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats_list"] });
    },
  });
};
