import AllTags from "./AllTagsRenderer";
import Difficulty from "./AllDifficulty";
import Status from "./Status"
const Cols = () => {
    return [
    {
      field: 'status',
      minWidth: 50,
      maxWidth: 75,
      cellRenderer:Status,

    },
    { 
      field: 'problem',
      minWidth:50,
      maxWidth:1000,
    },
    
    {
      field:'tags',
      cellRenderer:AllTags,
      width:50,
      minWidth:50,
      maxWidth:250,
      wrapText: true,
      autoHeight: true,
      // hide:true
      floatingFilter: true
    },
    { 
      field: 'difficulty',
      width:70,
      minWidth: 50,
      maxwidth:80,
      cellRenderer:Difficulty,
    },
  ]
}

export default Cols();