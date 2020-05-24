const navTags = document.getElementById('nav-tags');
const createNote = document.getElementById('create-note');
const noteForm = document.getElementById('note-form');
const formClose = document.getElementById('form-close-button');
const leftTodo = document.getElementById('left-todo');
const submitForm = document.getElementById('create-form-btn');
const rightToDo = document.getElementById('right-todo');
const editForm = document.getElementById('edit-form');
const editFormCloseButton = document.getElementById('edit-form-close-button');
const cancelEditBtn =document.getElementById('cancel-edit-form-btn');
currentTextAreaTitle = document.getElementById('text-area-title');
currentTextAreaNote = document.getElementById('text-area-note');
edit = document.getElementById('edit');
del = document.getElementById('delete');
const editBtn = document.getElementById('edit-form-btn');
const modalBg = document.getElementById('modal-bg');
rightTodoIconsCOnt = document.getElementById('right-todo-icons-cont');


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
var title = "for you";
var clone_id = 'note-div-0';
var note = 'loremw20';
var tag = 'foribvi'

var notesContainer = (title,clone_id,note,tag) => {
  var noteContainer = '<div id="' + clone_id + '" class="note-div" style="margin: 2px 0px; cursor: pointer; background: white; padding: 10px;">';
  noteContainer += '<h2 id="h2-0">' + title + '</h2>';
  noteContainer += '<p id="p-0">' + note + '</p>';
  noteContainer += '<h5 id="tag-div-0">';
  noteContainer += '<span class="tag-span" style="background: rgb(218, 216, 216); border-radius: 30px; padding: 10px;">' + tag + ' </span>';
  noteContainer += '<span class="tag-time"> 23 hours ago</span> '
  noteContainer += '<span id="tag-ellipse-0"style="background: rgb(218, 216, 216); border-radius: 30px; padding: 5px;"><i class="fas fa-ellipsis-h"></i>'
  noteContainer += '<div id="left-note-icons-cont">'
  noteContainer += '<div class="left-note-dropdown" id="note-edit"><i class="fas fa-pen" style="padding-right: 30px;"></i> Edit</div>'
  noteContainer += '<div class="left-note-dropdown" id="note-delete"><i class="fas fa-trash" style="padding-right: 30px;"></i> Delete</div>';
  noteContainer += '<div class="left-note-dropdown"><i class="fa fa-print" aria-hidden="true" style="padding-right: 30px;"></i> Print</div>'
  noteContainer += '<div class="left-note-dropdown"><i class="fa fa-archive" aria-hidden="true" style="padding-right: 30px;"></i> Archieve</div>';
  noteContainer += '</div></span></h5></div>'
  document.write(noteContainer)
}
notesContainer('Phenom', 'notediv1', 'phenomiscoding', 'phenompersonal')

// MODAL FUNCTION

createNote.addEventListener('click', () => {
  modalBg.style.display = 'block';
  noteForm.style.display = 'block';
  editForm.style.display = 'none';
  modalBg.addEventListener('click', (event) => {
    if(event.target.id == 'modal-bg'){
      modalBg.style.display = 'none';
    }
  })
  formClose.addEventListener('click', () => {
    modalBg.style.display = 'none';
  })
})

let i = 0;


const noteDiv = document.getElementById('note-div-0');
noteDivClone = noteDiv.cloneNode(true)
const tagDiv = document.getElementById('tag-div-0');
tagDivClone = tagDiv.cloneNode(true);




currentTextAreaTitle.innerHTML = noteDiv.firstElementChild.innerHTML;
currentTextAreaNote.innerHTML = noteDiv.childNodes[3].innerHTML;
submitForm.addEventListener('click', () => {
  let title = document.getElementsByClassName('form-field')[0] ;
  let note = document.getElementsByClassName('form-note')[0] ;
  if (title == '' || note == '') {
    alert('Complete filling the form')
  }
  else {
    
    cloned = tagDivClone.cloneNode(true);
    let tagDivTag  = cloned.firstElementChild;
    tagDivTag.innerHTML = document.getElementsByClassName('form-field')[1].value;
    
    clone = noteDivClone.cloneNode(true);
    clone.id = 'note-div-'+ `${i+1}`;
    clone.className = 'note-div';
    let title = clone.childNodes[1];
    let note = clone.childNodes[3];
    let h5 = clone.childNodes[5];
    title.id = 'h2-' + `${i +1}`;
    note.id = 'p-' + `${i +1}`;
    cloned.id = 'tag-div-' + `${i +1}`;
    clone.replaceChild(cloned, h5);
    title.innerHTML = document.getElementsByClassName('form-field')[0].value;
    note.innerHTML = document.getElementsByClassName('form-note')[0].value;
    console.log(clone);
    
    // leftTodo.append(clone);

    i++;
    
    document.getElementsByClassName('form-field')[0].value = "";
    document.getElementsByClassName('form-field')[1].value = '';
    document.getElementsByClassName('form-note')[0].value = '';

    modalBg.style.display = 'none';
  }
})

var noteDivId = noteDiv.id;
  
leftTodo.addEventListener('click', (event) => {
  noteDivId = event.target.parentNode.id;
  if (event.target.parentNode.className == 'note-div') {
    currentTextAreaTitle.innerHTML = event.target.parentNode.firstElementChild.innerHTML;
    currentTextAreaNote.innerHTML = event.target.parentNode.childNodes[3].innerHTML;
  }
  if (event.target.className == 'note-div'){
    currentTextAreaTitle.innerHTML = event.target.firstElementChild.innerHTML;
    currentTextAreaNote.innerHTML = event.target.childNodes[3].innerHTML;
    noteDivId = event.target.id;
  }
})



noteEdit = document.getElementById('note-edit');
var editDiv;


edit.addEventListener('click', () => {

  modalBg.style.display = 'block';
  noteForm.style.display = 'none';
  editForm.style.display = 'block';

  modalBg.addEventListener('click', (event) => {
    if(event.target.id == 'modal-bg'){

      modalBg.style.display = 'none';
    }
  })

  editFormCloseButton.addEventListener('click', () => {
    modalBg.style.display = 'none';
  })
  cancelEditBtn.addEventListener('click', () => {
    modalBg.style.display = 'none';
  })
  editDiv = document.getElementById(noteDivId);
  document.getElementsByClassName('edit-field')[0].value = editDiv.firstElementChild.innerHTML;
  document.getElementsByClassName('edit-field')[2].value = editDiv.childNodes[3].innerHTML;
  document.getElementsByClassName('edit-field')[1].value = editDiv.lastElementChild.firstElementChild.innerHTML;

})

editBtn.addEventListener('click', () => {
  editDiv.firstElementChild.innerHTML = document.getElementsByClassName('edit-field')[0].value;
  editDiv.childNodes[3].innerHTML = document.getElementsByClassName('edit-field')[2].value ;
  editDiv.lastElementChild.firstElementChild.innerHTML = document.getElementsByClassName('edit-field')[1].value;
  
  modalBg.style.display = 'none';
  
})

del.addEventListener('click', () => {
  editDiv = document.getElementById(noteDivId);
  editDiv.remove()
})

noteDel = document.getElementById('note-delete');

// noteDel.addEventListener('click', () => {
//   editDiv = document.getElementById(noteDivId).parentNode.parentNode;
//   editDiv.remove()
// })


document.addEventListener('click', (event) => {
  if(event.target.id == 'right-todo-icons' || event.target.parentNode.id == 'right-todo-icons') {
    if (rightTodoIconsCOnt.style.display == 'none'){

      rightTodoIconsCOnt.style.display = 'inherit';
    }
    else {
      rightTodoIconsCOnt.style.display = 'none';
    }
  }
  else {
    rightTodoIconsCOnt.style.display = 'none';
  }
})

let leftNoteIconsCont = document.getElementById('left-note-icons-cont');
let leftNoteEdit = document.getElementById('note-edit');
noteDiv.addEventListener('click', (event) => {
  if (event.target.id == 'tag-ellipse-0' || event.target.parentNode.id == 'tag-ellipse-0') {
    if(leftNoteIconsCont.style.display == 'none'){  
      leftNoteIconsCont.style.display = 'inherit';
    }
    else {
      leftNoteIconsCont.style.display = 'none';
    }
  }
  else {
    leftNoteIconsCont.style.display = 'none';
  }
  
})

