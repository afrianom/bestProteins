export default function TabButton({children, clicksito, isSelected}) {

    return(
        <li>
            <button className={isSelected ? 'active' : ''} onClick={clicksito}>{children}</button>
        </li>
    )
}