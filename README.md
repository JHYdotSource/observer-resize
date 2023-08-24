# A ResizeObserver Case Study
## ResizeObserver vs. EventListener vs. Container Queries
In this study I try to achieve the same result with three different techniques.
I will examine the differences, advantages and disadvantages, as well as their uses.
The goal is not to find the worst or best but to show other developers a wide range of possibilities.

### EventListener: Resize
The EventListener is the least flexible function to compute size changes.
Most data needs to be gained manually.

#### Contra
- Only works on window element
- It won't react to changes if page size remains the same
- Wont automatically trigger on page load
- Hard to maintain with multiple elements

#### Pro
- No native initial load
- Trigger functions
- Change markup and attributes
- Highly compatible with any browser old or new
- Load or unload content
- Can be removed

### ResizeObserver
The ResizeObserver is relatively new and quite flexible.
It provides a lot of precize data in it's callback function.

#### Contra
- Browser Support on older browsers

#### Pro
- Initial Load
- Trigger functions
- Change markup and attributes
- Compatible with most modern browsers released since 2020
- Lots of data from callback function
- Flexible in Handling inline and block size

https://jhydotsource.github.io/observer-resize/
