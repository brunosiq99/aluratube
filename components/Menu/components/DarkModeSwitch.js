export const DarkModeSwitch = ({changeTheme}) => {
    return(
        <form onChange={(e) => changeTheme(e.target.value)}>
            <input type="radio" name="mode" value="dark"/>
            <input defaultChecked type="radio" name="mode" value="light"/>
        </form>
    )
}