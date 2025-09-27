import React from "react"
import { containerVariants } from "./variants"




interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Container: React.FC<ContainerProps> = ({children, size = 'md', className, ...props}) => {
    return (
        <div 
            className={containerVariants({ 
                size, 
                className
            })}
            {...props}
        >
            {children}
        </div>
    )
}
    
