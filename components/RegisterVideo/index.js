import { useState } from "react";
import { TextInput } from "./components/TextInput";
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
    const autoChangeThumbnail = (e) => {
        // when url input loses focus, this function adds a thumbnail based in the url
        
        // If url follow the youtube pattern, idUrl receives an (array != null), than it set an automatic thumb
        const url = e.target.value;
        const videoIdRegex = /youtube[.]com[/]watch[?]v=.*/;
        let idUrl = videoIdRegex.exec(url); 
        if(idUrl !== null){
            //return only the id of video, excluding domain and aditional informations after &
            const id = idUrl[0].replace('youtube.com/watch?v=','').replace('\&.*','');
            setValues({
                ...values,
                thumbnail:`https://img.youtube.com/vi/${id}/hqdefault.jpg`
            })
        }
 
    }
    return{
        values,
        handleChange,
        clearForm: () => { setValues({}) },
        autoChangeThumbnail
    }
}

export const RegisterVideo = () => {
    const [visibleForm, setVisibleForm] = useState(false);
    const formValues = useForm({
        initialValues:{title:"", url:"", thumbnail:""}
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
                        <TextInput 
                            placeholder="Título do Video"
                            name="title"
                            formValues={formValues}
                        />
                        <TextInput
                            placeholder="URL"
                            name="url"
                            formValues={formValues}
                            onBlur={formValues.autoChangeThumbnail}
                        />
                        <TextInput
                            placeholder="Thumbnail"
                            name="thumbnail"
                            formValues={formValues}
                        />
                        {formValues.values.thumbnail && (
                            <img
                                src={formValues.values.thumbnail}
                            />)
                        }
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}    
        </StyledRegisterVideo>
    )
}