
export const TextInput = ({placeholder,name,formValues,onBlur}) => {
    return(
        <input 
            placeholder={placeholder}
            name={name}
            value={formValues.values[name]}
            onChange={formValues.handleChange}
            onBlur={onBlur}
        />
    )
}