
/*
Problem:

The coding challenge:
Starting with the following json object let list = {"one" : "red", "two":"orange", "three" : "yellow", "four" :"green", "five": "blue", "six" : "indigo", "seven" : "violet", "eight": "grey", "nine" : "black" }; Using javascript, html and css, (you can add whatever libraries you like) take the list object and make a 3 x 3 grid of 100px squares that are each separated by 100px white gap from each edge.
The colors of each square should align to the colors in the list. The final product should look like: https://drive.google.com/file/d/1FBe2AP0fh1mtEHgI8zAoGx25J9xUIR_q/view?usp=sharing

Please write the code such that if the initial list object is changed on page load then the colors should change.

After we’ve walked seen your demo and walked through the code, I’ll give you a new list object using the same keys and colors but in a different order and ask you to replace the old list with the new list and load the page so we can see the colors change.
*/

window.onload = () => {
    let colors = { "one": "red", "two": "orange", "three": "yellow", "four": "green", "five": "blue", "six": "indigo", "seven": "violet", "eight": "grey", "nine": "black" };
    for (const item of document.querySelectorAll("div.grid div.item")) {
        item.style.backgroundColor = colors[item.id];
    }
}