const CategoryButton = (props) => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}
export default CategoryButton