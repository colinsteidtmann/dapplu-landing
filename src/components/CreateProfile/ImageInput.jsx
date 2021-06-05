import React, { useState, useEffect } from "react";
import { Field, useField } from "formik";
// Hooks
import {usePictureUpload} from "#hooks";
// Assets
import { profilePic } from "#assets/images";



const UploadField = ({ ...props }) => {
	const {className, ...otherProps} = props;
	const uploadedImg = usePictureUpload(otherProps.form.values.profilePic.file);

    return ( <
        >
        <div className={"card " + className}>
    		<img
    			id="profilePic"
    			src={uploadedImg ? uploadedImg : profilePic}
    			className="card-img-top"
    			alt="..."
    			style={{ height: "30vh", objectFit: "cover" }}
    		/>
    		<div className="card-body text-center">
    			<h5 className="card-title">
    				Thumbnail image
    			</h5>
    			<Field 
    				type="file" 
    				className="d-none" 
    				id="imageUpload"
    				name="inputFile"
    				{...otherProps}
    			/>
    			<button type="button" className="btn btn-primary" onClick={() => {document.getElementById("imageUpload").click()}}>
    				Upload
    			</button>
    		</div>
    	</div> <
        />
    );
};

const ImageInput = (props) => {
	const {className} = props;
    /* eslint-disable no-unused-vars */
    const [field, meta, helpers] = useField(props);
    /* eslint-disable no-unused-vars */
    const { value } = field;
    const { setValue } = helpers;
    const [file, setFile] = useState(value.file);

    const _onChange = (e) => {
        if (!e.target || !e.target.files) {
            return;
        }
        const file = e.target.files[0];
        setFile(file);
    }

    useEffect(() => {
        if (file) {
            setValue({ file: file });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    return ( 
    	<>
		    <Field 
			component={UploadField} 
			onChange={_onChange}
			className={className} 	  		          		    	
			/> 
		</>
    );
}


export default ImageInput;



