import { useState } from "react";
import { StyledRegisterVideo } from "./Styles";
const useForm = ({initialValues}) => {
    const [values, setValues] = useState(initialValues)
    const handleChange = (e) => {
        const value = e.target.value;
        const variable = e.target.name;
        setValues({
            ...values,
            [variable]:value
        })
    }

    return{
        values,
        handleChange,
        clearForm: () => { setValues({}) }
    }
}

export const RegisterVideo = () => {
    const [visibleForm, setVisibleForm] = useState(false);
    const formValues = useForm({
        initialValues:{title:"", url:""}
    })
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=>{setVisibleForm(true)}}>
                +
            </button>
            {visibleForm && (
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        setVisibleForm(false);
                        formValues.clearForm();
                    }}
                >
                    <div>
                        <button type="button" className="close-modal" onClick={()=>{setVisibleForm(false)}}>
                            x
                        </button>
                        <input 
                            placeholder="Título do Video"
                            name="title"
                            value={formValues.values.title}
                            onChange={formValues.handleChange}
                        />
                        <input 
                            placeholder="URL"
                            name="url"
                            value={formValues.values.url}
                            onChange={formValues.handleChange}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}    
        </StyledRegisterVideo>
    )
}