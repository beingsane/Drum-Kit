# Drum-Kit
A drum kit game, a project in the Complete Web Dev Course
# What did I learn?
## I/ Event Listener

Add Event Listener

- addEventListener(): sets up a function that will be called whenever the specified event is delivered to the target. Common targets are [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element), [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), and [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window), but the target may be any object that supports events (such as [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)).
- **target.addEventListener(type, callbackFunc(Event){});**
  - Type refers to types of event such as &quot;click&quot;
  - CallbackFunc could be a JavaScript Function. The JS function could be an anonymous function such as **function () {}**
  - **Procedure:** As the addEventListener is called, first, it would check if the **event type matches the type** in the parameter. If so, the **callback function** will be called. The **callback function** will do whatever it is instructed to do with the **called HTML Element**. The **called HTML Element** can be accessed by using **this** keyword. And the Event, evoked by the users, as a parameter of the callback function, can be access by using **Event dot notation**

## II/Creating Sound in JS

**audioObj = new Audio(url);**

- The Audio() constructor creates and returns a new HTMLAudioElement which can be either attached to a document for the user to interact with and/or listen to, or can be used offscreen to manage and play audio.

  -

## III/ setTimeOut

**setTimeOut (callbackFunction, timeDuration)**

- **setTimeOut** would delay execution of the **callbackFunction** for the **timeDuration**

