function createTable() {
    //Write your code here
	let rows = prompt("Input number of rows");
    if (rows === null || rows === "" || isNaN(rows) || rows <= 0) {
        alert("Invalid input for number of rows.");
        return;
    }

    // Get the number of columns from the user
    let columns = prompt("Input number of columns");
    if (columns === null || columns === "" || isNaN(columns) || columns <= 0) {
        alert("Invalid input for number of columns.");
        return;
    }

    // Convert inputs to integers
    rows = parseInt(rows);
    columns = parseInt(columns);

    // Get the table element
    let table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < columns; j++) {
            let cell = row.insertCell();
            cell.innerHTML = `Row-${i} Column-${j}`;
        }
    }

}
