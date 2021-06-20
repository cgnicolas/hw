import React from 'react';
export default function Button({children, className, disabled, ...restProps}) {
    const commonClasses = 'p-2 rounded-md text-white font-bold';
    const enabledClasses = 'bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 cursor-pointer';
    const disabledClasses = 'bg-gray-500'
    return (
        <button disabled={disabled} className={`${commonClasses} ${!disabled ? enabledClasses : disabledClasses} ${className}`} {...restProps}>{children}</button>
    )
}