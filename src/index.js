
var botui = new BotUI('chatarea');

// Initialize:
botui.message.add({
  delay: 500,
  human: false,
  content: 'こんにちは．蝋人形の館へウェルカーーーム！'

}).then(askQuestion);


// Question:
function askQuestion() {
  botui.message.add({
    delay: 300,
    human: false,
    content: 'なにか質問してください！' 
  }).then(function() {
    return botui.action.text({
      delay: 500,
      action: {
        placeholder: '質問事項をここへ:'
      }
    });
  }).then(function(res) {
    var val = res.value;
    showAnswer(val);
  });
}

// Answer (and ask continue):
function showAnswer(val) {
  botui.message.add({
    delay: 500,
    human: false,
    content: '質問は'+val+'ですね．これに対する回答はxxxxxです．'
  
  }).then(function() {
    return botui.message.add({
      delay: 500,
      human: false,
      content: 'まだやんのかよ？'
    })

  }).then(function() {
    return botui.action.button({
      delay: 500,
      action: [{
        icon: 'circle-thin',
        text: 'はいすみません',
        value: true
      }, {
        icon: 'close',
        text: 'いえいいです',
        value: false
      }]
    });

  }).then(function(res) {
    res.value ? askQuestion() : closeChat();
  })
}

// Finish!
function closeChat() {
  botui.message.add({
    delay: 300,
    human: false,
    content: 'あばよー 良い夢見ろよ！'
  })
}
