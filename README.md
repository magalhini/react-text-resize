# React Text Resize

 Control the size of your paragraphs based on its length.
 Shorter lines will start at the `max` size, then decrease in size until the maximum number of characters (`capAt`) is reached; at which point it will use the `min` size and stop decreasing.
 
 ![](https://cldup.com/QemouMSu4t.gif)

 [See the demo page on Codepen](https://codepen.io/magalhini/pen/wqeaEE?editors=1010)

# Installation
`npm install react-text-resize`

# Usage

The component accepts DOM elements as children to count its number of characters:

```js
<TextFit className="optional-classes" min="16" max="46" capAt="150">
   <p>“Wise quotes are shorter”</p>
</TextFit>
```
