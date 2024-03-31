'use client'

import classes from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from 'next/image'

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader();
        console.log(fileReader.result)
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    return (<div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && <Image src={pickedImage} alt={"The image selected by user"} fill/>}
        </div>
        <div className={classes.controls}>
            <input className={classes.input} type={"file"} id={name} accept={"image/png; image/jpg"} name={name}
                   ref={imageInputRef} onChange={handleImageChange} required/>
            <button className={classes.button} type={"button"} onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>);
}