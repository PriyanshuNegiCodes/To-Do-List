let view = "grid";

let notesList=[];

function getNoteFromBoxInput() {
  // Get the input values
  const title = document.querySelector('#titleId').value;
  const description = document.querySelector('#descriptionId').value;
  const color = document.querySelector('#exampleColorInput').value;

  // Create and return the note object
  return {
      title: title,
      description: description,
      color: color
  };
}
function saveNote(event) {
  event.preventDefault();
  const note = getNoteFromBoxInput();
  notesList.push(note); 
  createCard(notesList); // Pass the entire notesList array
  //clear the input of the form
  clearInput(); 
}

function createCard(notesList) {
    let counter=0;
  // Get the note container element
  const noteContainer = document.querySelector('#note-container');
  

  // Clear the note container element to prevent the appending of the other note
  noteContainer.innerHTML = '';

  // Loop through the notesList array and create a card for each note
  notesList.forEach(note => {
      // Create a new card element
      const outerDiv=document.createElement("div");
      outerDiv.style.margin="10px";
    
      const card = document.createElement('div');
      card.style.paddingLeft="0px";
      card.classList.add('card');
      card.style.width = '11rem';
      
      card.style.margin="auto";  
    
      // Create card body
      const cardBody = document.createElement('div');
      //Add card body class and the text center style
      cardBody.classList.add('card-body', 'text-center');

      // Add title
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title', 'text-center');
      cardTitle.textContent = note.title;

      // Add description
      const cardDescription = document.createElement('p');
      cardDescription.classList.add('card-text');
      cardDescription.textContent = note.description;

      // Add button
      const DeleteButton = document.createElement('a');
      DeleteButton.classList.add('btn', 'btn-primary');
      DeleteButton.textContent = 'Delete Card';

      // Combine card elements to card body
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(document.createElement('hr'));
      cardBody.appendChild(cardDescription);
      cardBody.appendChild(DeleteButton);

      //Add footer with text to the card stating the card Id
      const cardFoot=document.createElement('footer');
      cardFoot.classList.add('text-center');
      const textAdded=document.createElement('p');
      card.id = 'box-'+counter;
      textAdded.textContent=card.id;  
      cardFoot.appendChild(textAdded);

      //Combine footer to card
      card.appendChild(cardFoot)

      // Combine card body to card
      card.appendChild(cardBody);

      // Set card background color
      card.style.backgroundColor = note.color;

      // Combine card to the note container
      outerDiv.appendChild(card);
      noteContainer.appendChild(outerDiv);

      // Add event listener to delete button
      deleteCard(card, DeleteButton, card.id);
      counter++;
  });

}
function deleteCard(card, DeleteButton, id) {
    // addEventListener for the delete button is below
    DeleteButton.addEventListener('click', function() {
      // Remove the card using the DOM element remove
      const cardById = document.getElementById(id);

      notesList.splice(cardById,1);
      card.remove();
    });
  }


function deleteBox(event) {
    const index = document.getElementById('box-index').value;
    const value= 'box-'+index;
    if (index !== null) {
        
        alert("This is the value"+value);
        
        // Get the  id of the element card
        const cardId=document.getElementById(value);
        // Delete it from the parent Div using DOM
        cardId.remove();

        notesList.splice(value,1);
        //Remove the same card from the list
        
    } else {
      alert('Box not found');
    }
    event.preventDefault();
  }


function clearInput() {
    // Clear the input values of the form
    document.querySelector('#titleId').value = '';
    document.querySelector('#descriptionId').value = '';
}

function showNotes(){
    const showNotesBtn = document.getElementById("note-container");
    showNotesBtn.style.display = "flex";

}

function hideNotes(){
    const showNotesBtn = document.getElementById("note-container");
    showNotesBtn.style.display = "none";
}

function addNotesDisplay(){
    const addNotesBtn = document.getElementById("note-container");
    addNotesBtn.style.display = "none";
}
let count=0;
function toggleView(){
  const mode=document.getElementById('dark_Mode');
  if(count%2==0){
    mode.style.backgroundColor="black"
  }else{
    mode.style.backgroundColor="#FFFFFF"
  }
  count++;
}

document.addEventListener("DOMContentLoaded", function() {
    let colorPicker=document.getElementById('exampleColorInput');
    let noteCard=document.getElementById('cardCo');
    
    colorPicker.addEventListener('input',()=>{
        noteCard.style.backgroundColor=colorPicker.value;
    });
});
