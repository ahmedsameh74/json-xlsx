# README

# Script: Read and Create Excel from JSON

## Description

This script reads two JSON files, combines the data, and creates an Excel file using the xlsx library.

## Prerequisites

- Node.js installed on your machine.

## Usage

1. Clone this repository to your local machine.
    
    ```bash
    git clone <repository-url>
    ```
    
2. Navigate to the project directory.
    
    ```bash
    cd <project-directory>
    ```
    
3. Install the required npm packages.
    
    ```bash
    npm install
    ```
    
4. Run the script with the following command:
    
    ```bash
    npm run jsontoxlsx <json-file1> <json-file2>
    ```
    
    Replace **`<json-file1>`**, and **`<json-file2>`** with the JSON file paths.
    

## Example

```bash
npm run jsontoxlsx ar.json en.json
```

## Output

The script generates an Excel file named "output.xlsx" in the project directory.

## ****Customization****

- The script is designed to handle two JSON files (`file1` and `file2`). If you have more than two files, you can extend the functionality by adding more file paths to the `process.argv` array and adjusting the code accordingly.
- You can customize column widths in the script by modifying the `worksheet["!cols"]` array.
- Add or modify keys in the `combinedData` array to include additional information in the Excel file.
- You have the flexibility to change the column headers by updating the keys in the `combinedData` array. Simply rename or add keys as needed to match the information you want in the Excel file.
    
    Example:
    
    ```jsx
    combinedData.push({
      "New Column 1": jsonData1[key],
      "New Column 2": jsonData2[key],
      "Custom Column 3": [],
      // Add more custom columns as needed
    });
    ```
    

## ****Notes****

- Before using the script, ensure that both JSON files (`file1` and `file2`) adhere to a specific structure. Each JSON file should be an object where the keys serve as a common identifier, and the values hold the associated data. The expected structure is as follows:

* file-1
```json 
{
    "key1": "value1",
    "key2": "value2",
    // Add more key-value pairs as needed
}
```
* file-2
```json 
{
    "key1": "value-01",
    "key2": "value-02",
    // Add more key-value pairs as needed
}
```

It is crucial that both JSON files maintain identical keys for proper data combination within the script.