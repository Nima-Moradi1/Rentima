import { useQuery } from "@tanstack/react-query"
import { getCardsList } from "../services"

const useGetCarsData = () => {
  const {data,isLoading,error} = useQuery({
    queryFn : getCardsList,
    queryKey : ['get-cars'],
    retryOnMount : true,
    refetchOnWindowFocus : true,
  })
  return {data , isLoading , error}
}

export default useGetCarsData