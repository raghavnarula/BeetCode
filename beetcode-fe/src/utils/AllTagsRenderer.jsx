import React from 'react';

const AllTags = (props) => {  
    // Split the string into an array of individual tags
    let tagsArray = []
    if (props.value!=undefined){
        tagsArray = props.value.split(',');
    }
    tagsArray.forEach((tag) => {
        console.log(tag);
      });
      return (
        <>  
            <div className="">
                {tagsArray.map((tag, index) => (
                    <button key={index} className="mx-1 bg-red-500 rounded-xl px-1 py-0 text-sm">
                        {tag.trim()}
                    </button>
                ))}
            </div>
        </>
    );
};

export default AllTags;
