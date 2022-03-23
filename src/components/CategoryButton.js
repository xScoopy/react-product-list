import ButtonBadge from "./ButtonBadge"

const CategoryButton = (props) => {
    const className = props.name === props.currentCategory ? "selected" : ""
    return (
        <button className={className} onClick={props.onClick}>
            {props.name}
            {props.name !== "All" ? <ButtonBadge count={props.count}/> : ''}
        </button>
    )
}
export default CategoryButton