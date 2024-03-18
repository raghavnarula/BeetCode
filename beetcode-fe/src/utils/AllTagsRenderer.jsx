
const AllTags = (props) => {
    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Split the string into an array of individual tags
    let tagsArray = [];
    if (props.value !== undefined) {
        tagsArray = props.value.split(',');
    }
    
    return (
        <>
            <div className="">
                {tagsArray.map((tag, index) => (
                    <button key={index} className="mx-1 bg-[#F2EBBF] text-black rounded-2xl px-2 py-0 text-xs">
                        {capitalizeFirstLetter(tag.trim())}
                    </button>
                ))}
            </div>
        </>
    );
};

export default AllTags;
