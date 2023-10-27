import cl from './MenuBurger.module.scss'

const MenuBurger = ({onClick}: {
    onClick: Function
}) => {
    return(
        <div className={cl.MenuBurgerItem} onClick={() => {
            onClick()
        }}>
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="17.5" x2="22" y2="17.5" stroke="#969BAD" strokeWidth="3"/>
                <line y1="9.5" x2="22" y2="9.5" stroke="#969BAD" strokeWidth="3"/>
                <line y1="1.5" x2="22" y2="1.5" stroke="#969BAD" strokeWidth="3"/>
            </svg>
        </div>
    )
}
export default MenuBurger;