import { MenuIcon } from "@/components/icons/MenuIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { InventoryIcon } from "@/components/icons/InventoryIcon";
import { ReportsIcon } from "@/components/icons/ReportsIcon";
import { EmployeesIcon } from "@/components/icons/EmployeesIcon";
import { ManageStoreIcon } from "@/components/icons/ManageStoreIcon";

export function getSideNav() {
  return [
    {
      id: 1,
      name: "Dashboard",
      path: `/dashboard`,
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Products",
      path: `/products`,
      icon: MenuIcon,
    },
    {
      id: 3,
      name: "Inventory",
      path: `/inventory`,
      icon: InventoryIcon,
    },
    {
      id: 4,
      name: "Reports",
      path: `/reports`,
      icon: ReportsIcon,
    },
    {
      id: 5,
      name: "Employees",
      path: `/employees`,
      icon: EmployeesIcon,
    },
    {
      id: 6,
      name: "Manage Store",
      path: `/manage-store`,
      icon: ManageStoreIcon,
    },
  ];
}
