import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCamp, discoverCamps, getCamps } from "../api/camp.api";
import { useMe } from "@/features/auth/hooks/auth.hooks";


export function useCreateCamp() {

  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createCamp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-camps"]
      });
    },
  })
}

export function useGetCamps(userId?: string) {
  return useQuery({
    queryKey: ["user-camps", userId],
    queryFn: () => getCamps(userId!),
    enabled: !!userId,
  });
}

export function useDiscoverCamps() {
  return useQuery({
    queryKey: ["discover-camps"],
    queryFn: discoverCamps,
  })
}