# A ResizeObserver Case Study
## ResizeObserver vs. EventListener vs. Container Queries
In this study I try to achieve the same result with three different techniques.
I will examine the differences, advantages and disadvantages, as well as their uses.
The goal is not to find the worst or best but to show other developers a wide range of possibilities.

### EventListener: Resize
The EventListener is the least flexible function to compute size changes
#### Contra
- Only works on window element
- Wont automatically trigger on page load
- Hard to maintain with multiple elements

#### Pro
- Trigger functions
- Change markup and attributes
- Highly compatible with any browser old or new
- Load or unload content
- Can be removed

https://jhydotsource.github.io/observer-resize/
