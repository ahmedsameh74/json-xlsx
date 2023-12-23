const fs = require("fs/promises");
const XLSX = require("xlsx");

async function readAndCreateExcel() {
  try {
    const [, , file1, file2] = process.argv;

    if (!file1 || !file2) {
      console.error("Please provide both JSON files.");
      return;
    }

    // Use Promise.all to read both JSON files in parallel
    const [data1, data2] = await Promise.all([
      fs.readFile(file1, "utf-8"),
      fs.readFile(file2, "utf-8"),
    ]);

    // Parse the JSON data
    const jsonData1 = JSON.parse(data1);
    const jsonData2 = JSON.parse(data2);

    const combinedData = [];

    Object.keys(jsonData1).forEach((key) => {
      combinedData.push({
        "الاسم باللغة العربية": jsonData1[key],
        "الاسم باللغة الانجليزية": jsonData2[key],
        "تعميد الاستاذ طارق باللغة الانجليزية": [],
        "تعميد الاستاذ احمد الحضري باللغة الانجليزية": [],
        "تم تعديلها في المنصة": [],
      });
    });

    

    console.log(jsonData1, jsonData2)

    // Create a workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(combinedData);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save the workbook as an Excel file
    // const outputFileName = "اضافة المصتلحات باللغة العربية.xlsx";
    const outputFileName = "output.xlsx";

     worksheet["!cols"] = [
       { wch: 30 }, //column width
       { wch: 30 }, //column width
       { wch: 30 }, //column width
       { wch: 30 }, //column width
       { wch: 30 }, //column width
     ];
    XLSX.writeFile(workbook, outputFileName);

    console.log(`Excel file created successfully: ${outputFileName}`);
  } catch (error) {
    console.error("Error reading files or creating Excel:", error);
  }
}

readAndCreateExcel();
