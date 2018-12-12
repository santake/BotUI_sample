
var botui = new BotUI('chatarea');

// Initialize:
botui.message.bot({
  delay: 100,
  // NOTE: somehow href link and image link does not work
  content: 'こんにちは．[蝋人形](https://docs.botui.org/)^の館へウェルカーーーム！'
}).then(askQuestion);


// Question:
function askQuestion() {
   // or use bot() instead.
  botui.message.add({
    delay: 1000,
    human: false,
    content: '質問をどうぞ！' 
  }).then(function() {
    return botui.action.text({
      delay: 500,
      action: {
        placeholder: '質問事項をここへ: '
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
    delay: 1000,
    human: false,
    loading: true,
    content: 'なるほど．回答は次のようになります: *&#@#$%^&*&(&*(&$#@#@@$%!@#$%^&*'
  
  }).then(function() {
    return botui.message.bot({
      delay: 1000,
      content: 'まだやんの？'
    })

  }).then(function() {
    return botui.action.button({
      delay: 500,
      action: [{
        icon: 'circle-thin',
        text: 'はい すみません',
        value: true
      }, {
        icon: 'close',
        text: 'いいえ ごめんなさい',
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
    content: '二度と来んなー！'
  })
}
