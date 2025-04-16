type UseSetActiveParams = {
    onChange: (id: number) => void;
};

export function useSetActive({ onChange }: UseSetActiveParams) {
    return (id: number) => {
        onChange(id);
    };
}