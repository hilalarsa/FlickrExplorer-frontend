const SearchInput = ({ handleClick, handleChange, inputClassname = "", inputName = "", placeholder = "", initialValue = "", disabled = false}) => (
    <>
    <input
        onClick={e => {
            if (handleClick !== undefined) handleClick(e);
        }}
        onChange={e => {
            if (handleChange !== undefined) handleChange(e);
        }}
        name={inputName}
        disabled={disabled}
        value={initialValue}
        placeholder={placeholder}
        className={""}
        type="text"
    />
    </>
);
export default SearchInput