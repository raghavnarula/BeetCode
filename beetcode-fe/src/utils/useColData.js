import AllTags from "./AllTagsRenderer";

const Cols = () => {
    return [
    {
      field: 'make',
      checkboxSelection: false,
      editable: false,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          'Tesla',
          'Ford',
          'Toyota',
          'Mercedes',
          'Fiat',
          'Nissan',
          'Vauxhall',
          'Volvo',
          'Jaguar',
        ],
      },
    },
    { field: 'model' },
    { field: 'price', filter: 'agNumberColumnFilter' },
    {field:'tags',cellRenderer:AllTags},
    {
      field: 'month',
      comparator: (valueA, valueB) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        const idxA = months.indexOf(valueA);
        const idxB = months.indexOf(valueB);
        return idxA - idxB;
      },
    },
  ]
}

export default Cols();