# __Development Notes__

****

### Steps
1. complete
2. complete
3. complete
4. ChatWindow 'ul' tag removal. When I removed the 'ul' tag in 'ChatWindow.js':
  - issue: In Firefox the 'ul' bullet points did not display, however in Chrome and Safari the 'ul' bullet points were visible.
  - solution: I styled the 'li' (list) tag so that the bullet point was no longer visable instead of removing the 'ul' tag. I imported the 'index.css' file into the 'ChatWindow.js' file to accomplish this.
5. I was able to get a timestamp visible. Now, the attempt will be to format the time.
  - question: I don't understand why in the 'li' element there is a ```key={item.id}```
  ```<li key={item.id}>{item.id} {item.text}</li>```
  - then I use it again to create the time. Why only the 'id' and not the 'text' as well?
  - Formatted timestamp
    - issue: I'm getting a warning: 'child flattern/unique keyname'. The time stamp also only has one digit for the hour which a '2-digit' format is requested.
6. Added moment.js as a dependency.
7. I try several things but ended up using a mentor resource.
8. Check list:
  - [x] Create emoji component
  - [x] find emoji library
  - [x] Display emoji img
  - [x] output image value (:frown:)

Things I've tried:
- Downloaded 3 dependencies:
  - "react-emoji": "^0.5.0",
  - "react-emoji-picker": "^1.0.13",
  - "react-emojione": "^3.1.10"
- Used "react-emoji" as a function and was able to display emoji icons when directly typed into the 'message' area that prints when the send button or the enter key is executed.
- I planned on using the emoji-picker with a library of several emoji images from the react-emoji library. (this would resemble the Slack style picker, though a different library of images)
- Borrowed code from StackOverflow/JFiddle/CodePen
- Figured out that if you use the emoji menu in The Mac Operating system that you can input those images into the input field and it prints properly to the chat message.
- Downloaded React Story Book and tried to mimic the way the button works in that application.
- Toyed with a few functions of my own based on vanilla javascript
- There were a few other things I tried as well.
- __Reflection__: Ultimately, I had to decide whether to use the ':happy:' type of format or the 😀 format of the emoji and program the text box to handle either one. There's a disconnect somewhere in passing the appropriate code or image to the input box and out to the message area.
- __Conslusion:__ I think that my knowledge of React is limited when implimenting this feature.
9. Design: Let the games begin! The theme and fictional purpose of the website kind of materialized as I thought about what a chat window could be creatively used for. I loved the design part. Celebrate Life...every day!
10. I didn't do too much on refactoring. I decided it was more important to tie up loose ends and turn this project in.

*****
## Wrap Up

I learned that React is a world that I know some about and have grown to love, but that is a place where there's so much more to explore.

I learned that when you don't have someone sitting by you or readily available, your mind is open...I honed in on the issue and focused on what I thought might be the solution. It was an interesting process.

Thanks for the opportunity to test my skills how ever large or small they might be.

Josh Holladay, Front-end Developer Applicant, May 22, 2017
