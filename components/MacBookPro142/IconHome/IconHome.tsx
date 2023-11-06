import { ShapeIcon } from "./ShapeIcon.js";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./IconHome.module.css";
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
/* @figmaId 71:406 */
export const IconHome: FC<Props> = memo(function IconHome(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}><div className={classes.shape}>{props.swap?.shape || <ShapeIcon className={classes.icon}/>}</div></div>;
});
