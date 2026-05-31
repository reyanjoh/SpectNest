export function getSideNav(employeeId: string) {
  return [
    {
      id: 1,
      name: "Dashboard",
      path: `/home`,
      icon: "HomeIcon",
    },
    {
      id: 2,
      name: "Products",
      path: `/Products`,
      icon: "MenuIcon",
    },
    {
      id: 3,
      name: "Inventory",
      path: `/inventory`,
      icon: "InventoryIcon",
    },
    {
      id: 4,
      name: "Reports",
      path: `/reports`,
      icon: "ReportsIcon",
    },
    {
      id: 5,
      name: "Employees",
      path: `/employees`,
      icon: "EmployeesIcon",
    },
    {
      id: 6,
      name: "Manage Store",
      path: `/manage-store`,
      icon: "ManageStoreIcon",
    },
  ];
}
