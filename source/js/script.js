const body = document.body;
const buttonEdit = document.querySelector(".button--edit");
const buttonCanсel = document.querySelector(".button--cancel");
const buttonNewTask = document.querySelector(".button--new-task");
const buttonCloseModalAdd = document.querySelector(".button--close-modal-add");
const buttonCloseModalEdit = document.querySelector(
  ".button--close-modal-edit"
);

const openAddForm = () => {
  body.classList.add("show-modal");
  body.classList.add("show-modal--add");
};

const closeAddForm = () => {
  body.classList.remove("show-modal");
  body.classList.remove("show-modal--add");
};

const closeEditForm = () => {
  body.classList.remove("show-modal");
  body.classList.remove("show-modal--edit");
};

const editModeToggle = (isEdit) => {
  body.classList.toggle("edit", isEdit);
  const checkboxes = document.querySelectorAll(".todo__check-input");
  for (const checkbox of checkboxes) {
    checkbox.toggleAttribute("disabled", isEdit);
  }
};

//открывает форму добавления новой задачи

if (buttonNewTask) {
  buttonNewTask.addEventListener("click", () => {
    openAddForm();
  });
}

//закрывает форму добавления новой задачи

if (buttonCloseModalAdd) {
  buttonCloseModalAdd.addEventListener("click", () => {
    closeAddForm();
  });
}

// закрывает форму редактирования

if (buttonCloseModalEdit) {
  buttonCloseModalEdit.addEventListener("click", () => {
    closeEditForm();
  });
}

//закрывает форму по Escape

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeAddForm();
    closeEditForm();
  }
});

// переходит в режим редактирования, отключает чекбоксы

if (buttonEdit) {
  buttonEdit.addEventListener("click", () => {
    editModeToggle(true);
  });
}

// возвращает в режим просмотра, включает чекбоксы

if (buttonCanсel) {
  buttonCanсel.addEventListener("click", () => {
    editModeToggle(false);
  });
}
