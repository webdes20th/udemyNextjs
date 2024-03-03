'use client'

import classes from './image-picker.module.css'
import {useRef} from "react";

export default function ImagePicker({label, name}) {
    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click();
    }

    return (<div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input className={classes.input} type={"file"} id={name} accept={"image/png; image/jpeg"} name={name}
                   ref={imageInputRef}/>
            <button className={classes.button} type={"button"} onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>);
}