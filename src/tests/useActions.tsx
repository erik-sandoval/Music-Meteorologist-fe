import postDSSong, postDSSong  from '../Redux/DS/ds.actions';

export const useActions = () => {
    const ds: postDSSong = postDSSong();
    return {
        ds
    };
};

interface postDSSong {
    ds: postDSSong
}
export type Actions = useActions | null;