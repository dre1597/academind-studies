import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import { ItemForm } from './MealItemStyles';

interface Props {
    id: string;
    onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<Props> = ({ id, onAddToCart }) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current!.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        onAddToCart(enteredAmountNumber);
    };
    return (
        <ItemForm onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                id={id}
                label='Amount'
                input={{
                    id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </ItemForm>
    );
};

export default MealItemForm;
