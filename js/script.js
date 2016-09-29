var body = document.querySelector('body');

var codeGenerator = {
  addHeader: function() {
    var header = document.createElement('h4');
    header.classList.add('header');
    header.innerHTML = 'Тест по программированию';
    body.appendChild(header);
  },

  addQuestion: function(questNum) {
    var questionNumber = document.createElement('h4');
    questionNumber.innerHTML = questNum + '. Вопрос №' + questNum;
    body.appendChild(questionNumber);
  },

  addAnswers: function(answNum) {
    var answerVariant = document.createElement('input');
    answerVariant.type = 'checkbox';
    var label = document.createElement('label');
    label.classList.add('answ');
    var span = document.createElement('span');
    span.innerHTML = 'Вариант ответа №' + answNum;
    body.appendChild(label);
    label.appendChild(answerVariant);
    label.appendChild(span);
  },

  addButton: function() {
    var button = document.createElement('input');
    button.classList.add('btn', 'btn-primary', 'btn-lg');
    button.type = 'submit';
    button.value = 'Проверить мои результаты';
    body.appendChild(button);
  }

}

codeGenerator.addHeader();


for (var i = 1; i < 4; i++) {
  codeGenerator.addQuestion(i);
  for (var j = 1; j < 4; j++) {
    codeGenerator.addAnswers(j);
  }
}

codeGenerator.addButton();
