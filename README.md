# React Text Resize

 Control the size of your paragraphs based on their length.
 Shorter lines will start at the `max` size, then decrease in size until the maximum number of characters (`capAt`) is reached; at which point it will use the `min` size and stop decreasing.
 
 ![](https://cldup.com/QemouMSu4t.gif)

 [See the demo page on Codepen](https://codepen.io/magalhini/full/wqeaEE/)

# Installation
`npm install react-text-resize`

# Usage

The component accepts DOM elements as children to count its number of characters:

```js
<TextFit className="optional-classes" min="16" max="46" capAt="150">
   <p>“Wise quotes are shorter”</p>
</TextFit>
```

min: (int) — Minimum desired font size (in pixels)
max: (int) — Maximum desired font size (in pixels)
capAt: (int) — Number of characters where the text reaches its minimum size limit
