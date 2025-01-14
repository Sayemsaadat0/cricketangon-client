"use client";

import axiosRequest from "@/lib/axiosRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Fetch all users
export const useGetUsers = () => {
  return useQuery({
    queryKey: ["user_list"],
    queryFn: () =>
      axiosRequest({
        url: `/users`,
        method: "get",
      }),
  });
};

// Fetch a single user by ID
export const useGetSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () =>
      axiosRequest({
        url: `/users/${id}`,
        method: "get",
      }),
  });
};

// Create a new user
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/users`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_list"] });
    },
  });
};

// Update a user
export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/users/${id}`,
        method: "patch",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_list"] });
      queryClient.invalidateQueries({ queryKey: ["users", id] });
    },
  });
};

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) =>
      await axiosRequest({
        url: `/auth/change-password`,
        method: "post",
        data: body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_list"] });
    },
  });
};

// Delete a user
export const useDeleteUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () =>
      await axiosRequest({
        url: `/users/${id}`,
        method: "delete",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_list"] });
    },
  });
};
