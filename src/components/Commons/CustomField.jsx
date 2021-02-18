import React from 'react'

const CustomField = ({input, meta, label, ...props}) => {
    return (
        <div>
            {
            (props.fieldType !=='checkbox' && <props.fieldType {...input} {...props} placeholder={label}/>) || 
            <div><input {...input} {...props} type="checkbox"/> <label htmlFor={props.name}>Запомнить меня</label></div>
            }
            {meta.touched && ((meta.error && <div><span>{meta.error}</span></div>) || (meta.warning && <div><span>{meta.warning}</span></div>))}
        </div>
    )
}

export default CustomField