import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getMe, login, register } from "../api/auth.api";
import { useRouter } from "next/navigation";

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

// export function useLogout() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: logout,
//     onSuccess() {
//       queryClient.removeQueries({
//         queryKey: ["me"],
//       })
//     }
//   })
// }

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  })
}