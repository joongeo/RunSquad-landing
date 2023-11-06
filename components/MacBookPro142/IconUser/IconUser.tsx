import { ShapeIcon } from "./ShapeIcon.js";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./IconUser.module.css";
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
/* @figmaId 71:429 */
export const IconUser: FC<Props> = memo(function IconUser(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}><div className={classes.shape}>{props.swap?.shape || <ShapeIcon className={classes.icon}/>}</div></div>;
});
