import { ShapeIcon } from "./ShapeIcon.js";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./IconShoppingBag.module.css";
import resets from "../../_resets.module.css";
interface Props {
    className?: string;
    classes?: {
        root?: string;
    };
    swap?: {
        shape?: ReactNode;
    };
}
/* @figmaId 71:418 */
export const IconShoppingBag: FC<Props> = memo(function IconShoppingBag(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}><div className={classes.shape}>{props.swap?.shape || <ShapeIcon className={classes.icon}/>}</div></div>;
});
