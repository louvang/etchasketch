# [Etch A Sketch](https://louvang.github.io/etchasketch/)

Etch a Sketch is a pixellated drawing webapp that allows the user to set the dimensions of the canvas as well as change the color of their drawing ink.

<p align="center"><a href="https://louvang.github.io/etchasketch/" target="_blank"><img src="https://louvang.github.io/etchasketch/img/preview.png" alt="Etch a Sketch Preview" width="750px" /></a></p>

## How To

The user simply needs to glide their mouse across the canvas to start drawing. This is an Etch a Sketch so the line drawn is always connected.

The user can also select the color of their pen and change the canvas dimensions. If you want to drawer small squares, make the dimensions higher. If you want larger squares, make the dimensions smaller. I personally find a 64 x 64 canvas quite fun to draw on.

## About Code

The Etch a Sketch uses plain vanilla JavaScript with a series of functions that change the color of the squares and duplicate input when changed to create a square canvas.

## Thoughts

I found some difficulty in creating the logic for the pen that draws a gradual gradient. I wanted the pen to gradually go from black to white and then white to black. In order to do so, I had to initialize which state the pen was in to know whether or not it need to go to black or to go to white. After doing so, it was relatively easy to figure out. The gradation using CSS's `hsl(X, X%, X%)` color property value where the 3rd parameter is incremented by 10.

## Further Improvements

There are several ways to improve the app that I'd like to work on in the future. Some minor improvements are:

- Add feedback that indicates new dimensions have been set
- Add smooth transitions when squares change color

There are also several features that can be added to the webapp. Most notably, a way to save the image in the canvas and showcasing a gallery of all works made by visitors. This brings into the question whether or not to have a login system to allow users to draw.

Because these extra features are so large and this project is simply an exercise in what I've learned so far from The Odin Project, I may not pursue them although I believe it would be a really great Node.js exercise paired with React and MongoDB.
