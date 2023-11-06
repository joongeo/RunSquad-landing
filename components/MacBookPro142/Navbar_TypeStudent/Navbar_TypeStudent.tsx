import { _ToolbarItem_ActiveFalse } from "../_ToolbarItem_ActiveFalse/_ToolbarItem_ActiveFalse.js";
import { IconHome } from "../IconHome/IconHome.js";
import { ShapeIcon } from "./ShapeIcon.js";
import { _ToolbarItem_ActiveFalse2 } from "../_ToolbarItem_ActiveFalse2/_ToolbarItem_ActiveFalse2.js";
import { IconShoppingBag } from "../IconShoppingBag/IconShoppingBag.js";
import { ShapeIcon2 } from "./ShapeIcon2.js";
import { IconUser } from "../IconUser/IconUser.js";
import { ShapeIcon3 } from "./ShapeIcon3.js";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./Navbar_TypeStudent.module.css";
import resets from "../../_resets.module.css";
interface Props {
    className?: string;
    classes?: {
        root?: string;
    };
    swap?: {
        _ToolbarItem?: ReactNode;
    };
}
/* @figmaId 71:436 */
export const Navbar_TypeStudent: FC<Props> = memo(function Navbar_TypeStudent(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}><div className={classes.toolbarItems}><_ToolbarItem_ActiveFalse className={classes._ToolbarItem} swap={{
        iconPlaceholder: <IconHome className={classes.iconHome} swap={{
            shape: <ShapeIcon className={classes.icon}/>
        }}/>
    }} text={{
        label: <div className={classes.label}>Home</div>
    }}/>{props.swap?._ToolbarItem || <_ToolbarItem_ActiveFalse2 className={classes._ToolbarItem2} swap={{
        iconPlaceholder: <IconShoppingBag className={classes.iconShoppingBag} swap={{
            shape: <ShapeIcon2 className={classes.icon2}/>
        }}/>
    }} text={{
        label: <div className={classes.label2}>Events</div>
    }}/>}<_ToolbarItem_ActiveFalse2 className={classes._ToolbarItem3} swap={{
        iconPlaceholder: <IconUser className={classes.iconUser} swap={{
            shape: <ShapeIcon3 className={classes.icon3}/>
        }}/>
    }} text={{
        label: <div className={classes.label3}>Profile</div>
    }}/></div></div>;
});
