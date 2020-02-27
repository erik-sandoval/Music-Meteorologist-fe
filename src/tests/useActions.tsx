import postDSSong from '../Redux/DS/ds.actions';

export const useActions = () => {
    const ds: postDSSong = postDSSong();
    return {
        ds
    };
};

interface UseActions {
    ds: postDSSong
}
export type Actions = UseActions | null;