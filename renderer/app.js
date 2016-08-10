const notifier = require('node-notifier');
const path = require('path');

function createNotification(title, message) {
    notifier.notify({
        title: title,
        message: message,
        icon: path.join(__dirname, '../image/favicon.png'),
        sound: true,
        wait: true
    }, (err, response) => {
        if (err)
            console.log(err, err.stack);
    });
    console.log(title);
}

function handleNotification() {
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;
    createNotification(title, message)
}

const notifyButton = document.getElementById("notifyButton");
notifyButton.addEventListener("click", () => handleNotification());

// Triggers if `wait: true` and user clicks notification
notifier.on('click', function (notifierObject, options) {
    console.log('click');
});

// Triggers if `wait: true` and notification closes
notifier.on('timeout', function (notifierObject, options) {
    console.log('timeout');
});