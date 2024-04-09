import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting  as updateSettingService } from "../../services/apiSettings";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = 
  useMutation({
  
    mutationFn: updateSettingService,
  
    onSuccess: () => {
      toast.success("Setting sucessfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
  
    onError: (err) => toast.error(err.message),
  });

  return { updateSetting,  isUpdating };
};
