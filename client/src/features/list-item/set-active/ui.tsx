import { memo } from 'react';
import { Button } from '../../../shared/ui/Button';
import { useSetActive } from './model';

type SetActiveButtonProps = {
    id: number;
    isActive: boolean;
    onChange: (id: number) => void;
};

export const SetActiveButton = memo(({ id, isActive, onChange }: SetActiveButtonProps) => {
    const setActive = useSetActive({ onChange });

    return (
        <Button onClick={() => setActive(id)} disabled={isActive}>
            {isActive ? 'Active' : 'Set Active'}
        </Button>
    );
});