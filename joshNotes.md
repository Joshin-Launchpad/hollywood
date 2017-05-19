# __Development Notes__

****

### Steps
1. complete
2. complete
3. complete
4. ChatWindow 'ul' tag removal. When I removed the 'ul' tag in 'ChatWindow.js':
  - issue: In Firefox the 'ul' bullet points did not display, however in Chrome and Safari the 'ul' bullet points were visible.
  - solution: I styled the 'li' (list) tag so that the bullet point was no longer visable instead of removing the 'ul' tag. I imported the 'index.css' file into the 'ChatWindow.js' file to accomplish this.
5.1 I was able to get a timestamp visible. Now, the attempt will be to format the time.
  - question: I don't understand why in the 'li' element there is a '``key={item.id}``
  ```<li key={item.id}>{item.id} {item.text}</li>```
  - then I use it again to create the time. Why only the 'id' and not the 'text' as well?
5.2 Formatted timestamp
  - issue: I'm getting a warning: 'child flattern/unique keyname'. The time stamp also only has one digit for the hour which a '2-digit' format is requested.
6. Added moment.js as a dependency.
