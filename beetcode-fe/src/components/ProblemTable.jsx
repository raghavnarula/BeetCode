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

      const getRowStyle = params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#404040' };
        }
      };

    return (
        <div className="ag-theme-quartz h-[70vh] mx-[2%]">
          <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              enableCellTextSelection={false}
              suppressRowClickSelection={true}
              suppressRowHoverHighlight={true}
              autoSizeStrategy={autoSizeStrategy}
              pagination={true}
              getRowStyle={getRowStyle}
              paginationPageSize={20}
              paginationPageSizeSelector={[20, 40, 80]}
              rowHeight={30}
          />
        </div>
    );
};

export default ProblemTable

