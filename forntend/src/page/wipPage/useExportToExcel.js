import * as XLSX from 'xlsx';

export const useExportToExcel = () => {
  const exportToExcel = (rows, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(rows.map(row => row.original));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, filename);
  };

  return exportToExcel;
};
