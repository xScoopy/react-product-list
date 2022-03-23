const CategoryButton = (props) => {
    const className = props.name === props.currentCategory ? "selected" : ""
    return (
        <button className={className} onClick={props.onClick}>{props.name}</button>
    )
}
export default CategoryButton