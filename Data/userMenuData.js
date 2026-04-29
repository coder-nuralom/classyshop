import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { FiTag } from "react-icons/fi";

const userMenuItems = [
  { name: "My Account", path: "/my-account", icon: CgProfile },
  { name: "My Orders", path: "/my-account/orders", icon: FiShoppingBag },
  { name: "My Lists", path: "/my-account/lists", icon: FaRegHeart },
  { name: "Vouchers", path: "/my-account/vouchers", icon: FiTag },
  { name: "Logout", action: "logout", icon: TbLogout2 },
];

export default userMenuItems;
