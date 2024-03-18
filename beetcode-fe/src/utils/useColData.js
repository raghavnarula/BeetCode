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
      field: 'problem' 
    },
    { 
      field: 'difficulty',
      width:70,
      minWidth: 50,
      maxwidth:80,
      cellRenderer:Difficulty,
    },
    {
      field:'tags',
      cellRenderer:AllTags,
      width:100,
      minWidth:80,
      maxWidth:250,
      wrapText: true,
      autoHeight: true,
    },
  ]
}

export default Cols();