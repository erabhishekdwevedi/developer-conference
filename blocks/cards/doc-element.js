var doc = DocumentApp.getActiveDocument();
var body = doc.getBody();

      // Create a two-dimensional array containing the cell contents.
var table = 
[
  ['  Cards '],
  [
   ' <card_image> ', 
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada sollicitudin dolor et ornare. Cras gravida blandit est, gravida blandit lorem tempus et. Nunc fermentum elit vitae elit viverra pulvinar.'
  ]
];

// Build a table from the array.
var cursor = doc.getCursor();
var element = cursor.getElement();
var parent = element.getParent();
//here table is an array of cells like
// [[r1c1, r1c2], [r2c1, r2c2]]
body.insertTable(parent.getChildIndex(element) + 1, table);
