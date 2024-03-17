import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import problems from '../utils/useRowData'
import columns from '../utils/useColData'
import "./styles/problemtable.css"

const ProblemTable = () => {
    const allProblems = problems
    const [rowData, setRowData] = useState(allProblems);

    const [columnDefs, setColumnDefs] = useState(columns);

    const defaultColDef = useMemo(() => {
        return {
        };
    }, []);



    return (
        <div className="ag-theme-quartz h-[93vh] w-[66%] mx-auto">
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple"
            suppressRowClickSelection={true}
            pagination={true}
            paginationPageSize={20}
            paginationPageSizeSelector={[20, 40, 80]}
        />
        </div>
    );
};

export default ProblemTable

