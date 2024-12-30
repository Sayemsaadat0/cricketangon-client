"use client";

import axiosRequest from "@/lib/axiosRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Fetch all photos
export const useGetPhotos = () => {
  return useQuery({
    queryKey: ["photo_list"],
    queryFn: () =>
      axiosRequest({
        url: `/photo`,
        method: "get",
      }),
  });
};

// Fetch a single photo by ID
export const useGetSinglePhoto = (id: string) => {
  return useQuery({
    queryKey: ["photo", id],
    queryFn: () =>
      axiosRequest({
        url: `/photo/${id}`,
        method: "get",
      }),
  });
};

// Create a new photo
export const useCreatePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/photo`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photo_list"] });
    },
  });
};

// Update a photo
export const useUpdatePhoto = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/photo/${id}`,
        method: "patch",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photo_list"] });
    },
  });
};

// Delete a photo
export const useDeletePhoto = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      await axiosRequest({
        url: `/photo/${id}`,
        method: "delete",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photo_list"] });
    },
  });
};
