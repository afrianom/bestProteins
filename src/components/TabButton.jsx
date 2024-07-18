export default function TabButton({children, onClick}) {

    console.log('tabButton executing')

    return(
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}