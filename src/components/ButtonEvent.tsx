type ButtonProps = {
    handleClick: ( event: React.MouseEvent<HTMLButtonElement>, id: number ) => void;
};

export const Button = ( props: ButtonProps ) => {
    return (
        <button
            onClick={ ( event ) => props.handleClick( event, 45 ) }>Button</button>
    );
};
