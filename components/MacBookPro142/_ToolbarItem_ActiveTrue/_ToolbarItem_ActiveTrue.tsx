import { IconPlaceholder2 } from "../IconPlaceholder2/IconPlaceholder2.js";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./_ToolbarItem_ActiveTrue.module.css";
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
/* @figmaId 71:426 */
export const _ToolbarItem_ActiveTrue: FC<Props> = memo(function _ToolbarItem_ActiveTrue(props = {}) {
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}>{props.swap?.iconPlaceholder || <IconPlaceholder2 className={classes.iconPlaceholder}/>}{props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}</div>;
});
