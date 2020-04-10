const navTags = document.getElementById('nav-tags');
var noteList = document.getElementById('note-list');
const createNote = document.getElementById('create-note');
const modalBg = document.getElementById('modal-bg');
const noteForm = document.getElementById('note-form');
const editForm = document.getElementById('edit-form');
const submitForm = document.getElementById('create-form-btn');
const editFormBtn = document.getElementById('edit-form-btn');
const noteformClose = document.getElementById('form-close-button');
const editformClose = document.getElementById('edit-form-close-button');
const cancelEditBtn = document.getElementById('cancel-edit-form-btn');
const noteNav = document.getElementById('note-nav');
const currentNote = document.getElementById('current-note');
const notePreview = document.querySelectorAll('.note-preview');
const editBtn = document.getElementById('edit');
const deleteBtn = document.getElementById('delete');


const sticky = navTags.offsetTop;
window.onscroll = function() { 
  myfunction()
};

// NAV FUNCTION
function myfunction() {
  if (window.pageYOffset >= sticky) {
    navTags.classList.add('sticky');
  }
  else {
    navTags.classList.remove('sticky');
  }
}
// END OF NAV FUNCTION

// NOTE CREATOR
// var notesArr = [];
let i = 1;
// get noteData from user
var getCreatorData = () => {
  var creatorForm = document.querySelectorAll('.noteCreatorForm');
  let note_id = 'note-div-' + `${i+1}`;
  let title = creatorForm[0].value;
  let tag = creatorForm[1].value;
  let note = creatorForm[2].value;
  if (title == '' || tag == '' || note == '') {
    alert('Complete filling the form')
  } 
  else {
    notesContainer({note_id,title,tag,note});
    noteNav.textContent = `${i+1}`;
    
    i++;
    creatorForm[0].value = '';
    creatorForm[1].value = '';
    creatorForm[2].value = '';
  }
}
// get data of note to be edited
var editField = document.querySelectorAll('.edit-field');
var getNoteData = (note) => {
  editField[0].value = noteDiv.children[0].textContent;
  editField[1].value = noteDiv.children[2].children[0].textContent;
  editField[2].value = noteDiv.children[1].textContent;
}
// update data edited by user
var updateNoteData = (note) => {
  noteDiv.children[0].textContent = editField[0].value;
  noteDiv.children[2].children[0].textContent = editField[1].value;
  noteDiv.children[1].textContent =  editField[2].value;
}
var notesContainer = (obj) => {
  // notesArr.push(obj);
  var noteContainer = '<div id="' + obj.note_id + '" class="note-div" style="margin: 2px 0px; cursor: pointer; background: white; padding: 10px;">';
  noteContainer += '<h2 id="h2-0">' + obj.title + '</h2>';
  noteContainer += '<p id="p-0">' + obj.note + '</p>';
  noteContainer += '<h5 id="tag-div-0">';
  noteContainer += '<span class="tag-span" style="background: rgb(218, 216, 216); border-radius: 30px; padding: 10px;">' + obj.tag + ' </span>';
  noteContainer += '<span class="tag-time"> 23 hours ago</span> '
  noteContainer += '<span id="tag-ellipse-0"style="background: rgb(218, 216, 216); border-radius: 30px; padding: 5px;"><i class="fas fa-ellipsis-h"></i>'
  noteContainer += '<div id="left-note-icons-cont">'
  noteContainer += '<div class="left-note-dropdown" id="note-edit"><i class="fas fa-pen" style="padding-right: 30px;"></i> Edit</div>'
  noteContainer += '<div class="left-note-dropdown" id="note-delete"><i class="fas fa-trash" style="padding-right: 30px;"></i> Delete</div>';
  noteContainer += '<div class="left-note-dropdown"><i class="fa fa-print" aria-hidden="true" style="padding-right: 30px;"></i> Print</div>'
  noteContainer += '<div class="left-note-dropdown"><i class="fa fa-archive" aria-hidden="true" style="padding-right: 30px;"></i> Archieve</div>';
  noteContainer += '</div></span></h5></div>'
  noteList.innerHTML += `${noteContainer}`
}

// CREATE NOTE MODAL
createNote.addEventListener('click', () => {
  modalBg.style.display = 'block';
  noteForm.style.display = 'block';
  editForm.style.display = 'none';
  modalBg.addEventListener('click', (event) => {
    if(event.target.id == 'modal-bg'){
      modalBg.style.display = 'none';
    }
  })
  noteformClose.addEventListener('click', () => {
    modalBg.style.display = 'none';
  })
});
// end of modal

// SUBMIT BUTTON
submitForm.addEventListener('click', () => {
  getCreatorData();
  modalBg.style.display = 'none';
})
// end of submit button

// DISPLAY NOTE
var noteDivId = 'note-div-0';
noteList.addEventListener('click', (event) => {
  if (event.target.className == 'note-div' ) {
    noteDivId = event.target.id
    notePreview[0].textContent = event.target.children[0].textContent;
    notePreview[1].textContent = event.target.children[1].textContent;
  }
  if (event.target.parentNode.className == 'note-div'){
    noteDivId = event.target.parentNode.id;
    notePreview[0].textContent = event.target.parentNode.children[0].textContent;
    notePreview[1].textContent = event.target.parentNode.children[1].textContent;
  }
  noteDiv = document.getElementById(noteDivId);
})
// end of display note

// DISPLAY NOTE TOOLS
currentNoteIconsCont = document.getElementById('current-note-icons-cont');
document.addEventListener('click', (event) => {
  if(event.target.id == 'current-note-icons' || event.target.parentNode.id == 'current-note-icons') {
    if (currentNoteIconsCont.style.display == 'none'){

      currentNoteIconsCont.style.display = 'inherit';
    }
    else {
      currentNoteIconsCont.style.display = 'none';
    }
  }
  else {
    currentNoteIconsCont.style.display = 'none';
  }
})
// end of display note tools

// EDIT AND DELETE CURRENT NOTE TOOLS
// EDIT CURRENT NOTE TOOL
// edit modal
var editmodal = () => {
  modalBg.style.display = 'block';
  noteForm.style.display = 'none';
  editForm.style.display = 'block';
  modalBg.addEventListener('click', (event) => {
    if(event.target.id == 'modal-bg'){
      modalBg.style.display = 'none';
    }
  })
  editformClose.addEventListener('click', () => {
    modalBg.style.display = 'none';
  })
  cancelEditBtn.addEventListener('click', () => {
    modalBg.style.display = 'none';
  })
  getNoteData(noteDiv);
}

editBtn.addEventListener('click', () => {
  editmodal();
});
// edit operator
editFormBtn.addEventListener('click', () => {
  updateNoteData(noteDiv);
  modalBg.style.display = 'none';
})

// delete operator
var delOperator = () => {
  noteDiv.remove();
  noteNav.textContent = `${i-1}`;
  if(i>=2) {
    i--;
  }
}
deleteBtn.addEventListener('click', () => {
  delOperator();
});

// NOTE TOOLS
document.addEventListener('click', (event) => {
  if (event.target.id == 'tag-ellipse-0' || event.target.parentNode == 'tag-ellipse-0') {
    
    // let noteToolsDisplay = document.getElementById('tag-ellipse-0');
    let noteTools = event.target.children[1];
    // console.log(event.target.children);
    if (noteTools.style.display === 'none'){
      noteTools.style.display = 'inherit';
    }
    else {
      noteTools.style.display = 'none';
    }
  }
  if (event.target.id == 'note-edit') {
    editmodal();
    event.target.parentNode.style.display = 'none';
  }
  if (event.target.id == 'note-delete') {
    delOperator();
    event.target.parentNode.style.display = 'none';
  }
})
