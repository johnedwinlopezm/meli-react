import { useEffect, useState } from "react";
import styles from "./breadcrumb.module.sass"

interface BreadProps {
    categories: string[]
}

export const BreadCrumb = (props: BreadProps) => {
  
    return (
        <div className={styles.breadcrumb}>
            {props?.categories?.map(
                (categoria: string, index: number) => {
                    let content;
                    if (index + 1 !== props?.categories?.length) {
                        content = (<label className="text-brand">{categoria + '>'}</label>);
                    } else {
                        content = (<label className="text-brand-b" >{categoria}</label>);
                    }
                    return (content)
                }
            )
            }
        </div>
    )
}