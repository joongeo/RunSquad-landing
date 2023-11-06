import { ShapeIcon } from "./ShapeIcon.js";
import { memo } from "react";
import type { FC } from "react";
import classes from "./IconPlaceholder2.module.css";
import resets from "../../_resets.module.css";
interface Props {
    className?: string;
    classes?: {
        root?: string;
    };
}
/* @figmaId 71:420 */
export const IconPlaceholder2: FC<Props> = memo(function IconPlaceholder2(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}><div className={classes.shape}><ShapeIcon className={classes.icon}/></div></div>;
});
