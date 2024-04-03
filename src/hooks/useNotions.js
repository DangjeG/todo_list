import {useMutation, useQuery, useQueryClient} from "react-query";
import {NotionActions} from "../dataActions/Notion";

export const useNotions = () => {
    const {data} = useQuery({
        queryKey: 'notions',
        queryFn: NotionActions.getValue
    });
    return {
        notions: data,
    }
}

export const useAddNewNotion = () => {
    const {notions} = useNotions()
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (notion) => {
            if (notions) {
                const newNotionsArray = notions.concat([notion])
                return NotionActions.saveValue(newNotionsArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('notions')
        }
    });
    return {
        addNewNotion: mutate
    }
}

export const useDeleteNotion = () => {
    const {notions} = useNotions()
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (id) => {
            if (notions) {
                const newNotionsArray = notions.filter(item => !(item.id === id))
                return NotionActions.saveValue(newNotionsArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('notions')
        }
    });

    return {
        deleteNotion: mutate
    }
}
export const useUpdateNotion = () => {

    const {notions} = useNotions()
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (notion) => {
            if (notions) {
                const newNotionsArray = notions.map((item, index) => {
                    if(item.id === notion.id) return notion
                    else return item
                });
                return NotionActions.saveValue(newNotionsArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('notions')
        }
    });

    return {
        updateNotion: mutate
    }
}
