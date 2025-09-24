"use client"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {

    


    return (
        <button 
            className="flex justify-center items-center gap-3" 
            {...props}
        >
            { children }
        </button>
    )
}