import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useCallback, useMemo, useState } from 'react';
import problems from '../utils/useRowData'
import columns from '../utils/useColData'
import "./styles/problemtable.css"

const ProblemTable = () => {
    const [rowData, setRowData] = useState(problems);

    const [columnDefs, setColumnDefs] = useState(columns);

    const autoSizeStrategy = useMemo(() => {
        return {
            type: 'fitGridWidth',
            defaultMinWidth: 50,
            columnLimits: [
            {
              colId: 'problems',
              minWidth: 900,
            },
          ],
        };
    }, []);

    const sizeToFit = useCallback(() => {
        gridRef.current.api.sizeColumnsToFit({
            defaultMinWidth: 50,
            columnLimits: [{ key: 'problem', minWidth: 600 }],
        });
      }, []);

    return (
        <div className="ag-theme-quartz h-[93vh] w-[50%] mx-auto">
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowSelection="multiple"
            suppressRowClickSelection={true}
            autoSizeStrategy={autoSizeStrategy}
            pagination={true}
            paginationPageSize={20}
            paginationPageSizeSelector={[20, 40, 80]}
            rowHeight={30}
        />
        </div>
    );
};

export default ProblemTable

