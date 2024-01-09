import "styles/aside.tabitem.scss"

function TabItem(props) {
    const {img, name, liClass} = props
    return (
        <li role="tab" className={liClass}>
            <img src={img} alt="Icon" />{name}
        </li>
    )
}

export default TabItem