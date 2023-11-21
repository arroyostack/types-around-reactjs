
type InputProps = {
    value: string;
    handleChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
};

export const Input = ( { value, handleChange }: InputProps ) => {
    return (
        <div>
            <label htmlFor="main-input"></label>
            <input
                value={ value }
                onChange={ handleChange }
                id="main-input"
                type="text" />
        </div>
    );
};
