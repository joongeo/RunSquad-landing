import { IconPlaceholder } from "../IconPlaceholder/IconPlaceholder.js";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./_ToolbarItem_ActiveFalse.module.css";
import resets from "../../_resets.module.css";
interface Props {
    className?: string;
    classes?: {
        root?: string;
    };
    swap?: {
        iconPlaceholder?: ReactNode;
    };
    text?: {
        label?: ReactNode;
    };
}
/* @figmaId 71:412 */
export const _ToolbarItem_ActiveFalse: FC<Props> = memo(function _ToolbarItem_ActiveFalse(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}>{props.swap?.iconPlaceholder || <IconPlaceholder className={classes.iconPlaceholder}/>}{props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}</div>;
});
