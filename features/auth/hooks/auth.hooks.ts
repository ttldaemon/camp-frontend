import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getMe, login, register } from "../api/auth.api";

export function useLogin() {
  const queryClient = useQueryClient()

    return useMutation({
        mutationFn: login,
        onSuccess(data) {
            if (data?.user) {
              queryClient.setQueryData(["me"], data)
            }
        }
    })
}

export function useRegister() {
  const queryClient = useQueryClient()

    return useMutation({
        mutationFn: register,
        onSuccess(data) {
            if (data?.user) {
              queryClient.setQueryData(["me"], data)
            }
        }
    })
}

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  })
}