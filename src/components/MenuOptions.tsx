

const MenuOptions = ({ item, setter }) => {

  return (
    <a onClick={() => setter(item)} href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
      {item}</a>
  )
}

export default MenuOptions