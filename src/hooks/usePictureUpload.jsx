import {useState, useEffect} from "react";

export const usePictureUpload = (img) => {

	const [imgUrl, setImgUrl] = useState("");

	const displayImage = (image) => {
	    const reader = new FileReader();
	    reader.readAsDataURL(image);
	    reader.onload = function(){
	      var dataURL = reader.result;
	      setImgUrl(dataURL)
	    };
	};

	useEffect(() => {
		if (img) {
			displayImage(img);
		}
		
	}, [img]);

	return imgUrl;
};

export default usePictureUpload;