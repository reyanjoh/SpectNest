export function getSideNav(employeeId: string) {
  return [
    {
      id: 1,
      name: "Home",
      path: `/${employeeId}/home`,
      icon: "HomeIcon",
    },
    {
      id: 2,
      name: "Menu",
      path: `/${employeeId}/menu`,
      icon: "MenuIcon",
    },
    {
      id: 3,
      name: "Saved Items",
      path: `/${employeeId}/saved-items`,
      icon: "TagsIcon",
    },
    {
      id: 4,
      name: "Checkout",
      path: `/${employeeId}/checkout`,
      icon: "CartIcon",
    },
    // {
    //   id: 5,
    //   name: "Chat",
    //   path: `/${employeeId}/chat`,
    //   icon: "ChatIcon",
    // },
    {
      id: 6,
      name: "Inventory",
      path: `/${employeeId}/inventory`,
      icon: "InventoryIcon",
    },
  ];
}
