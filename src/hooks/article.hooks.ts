// "use client";

// import axiousResuest from "@/lib/axiosRequest";
// import { useMutation } from "@tanstack/react-query";
// import { useQueryClient } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import { useSession } from "next-auth/react";

// export interface blogResponseType {
//   id?: string;
//   title?: string;
//   blog_slug?: string;
//   short_description?: string;
//   blog_details?: string;
//   status?: "draft" | "published";
//   thumbnails?: string;
//   tag?: string;
//   upload_time?: any;
//   updated_at?: string;
//   writer?: {
//     first_name?: string;
//     last_name?: string;
//   };
// }

// export const useGetBlogList = () => {
//   return useQuery({
//     queryKey: ["blogContentList"],
//     queryFn: () =>
//       axiousResuest({
//         url: `/blog/content/`,
//         method: "get",
//       }),
//   });
// };

// export const useAddBlog = () => {
//   const queryClient = useQueryClient();
//   const { data: session }: any = useSession();
//   return useMutation({
//     mutationFn: async (body: any) =>
//       await axiousResuest({
//         url: `/blog/content/`,
//         method: "post",
//         data: body,
//         headers: {
//           Authorization: `Bearer ${session?.accessToken}`,
//         },
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["blogContentList"] });
//     },
//   });
// };

// export const useUpdateBlog = (id: string) => {
//   const queryClient = useQueryClient();
//   const { data: session }: any = useSession();
//   return useMutation({
//     mutationFn: async (body: any) =>
//       await axiousResuest({
//         url: `/blog/content/${id}/`,
//         method: "patch",
//         data: body,
//         headers: {
//           Authorization: `Bearer ${session?.accessToken}`,
//         },
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["blogContentList"] });
//     },
//   });
// };

// export const useDeleteBlog = (id: string) => {
//   const queryClient = useQueryClient();
//   const { data: session }: any = useSession();
//   return useMutation({
//     mutationFn: async (body: any) =>
//       await axiousResuest({
//         url: `/blog/content/${id}/`,
//         method: "delete",
//         data: body,
//         headers: {
//           Authorization: `Bearer ${session?.accessToken}`,
//         },
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["blogContentList"] });
//     },
//   });
// };
