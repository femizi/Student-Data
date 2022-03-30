

const MenuOptions = ({item}) => {
  return (
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
      {item.age? item.age: item.gender? item.gender.toUpperCase():item.name? item.name: item.level }</a>
  )
}

export default MenuOptions