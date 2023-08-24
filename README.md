# A ResizeObserver Case Study
## ResizeObserver vs. EventListener vs. Container Queries

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

https://jhydotsource.github.io/observer-resize/
