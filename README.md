# yzhu0781_9103_tut5_majorProject

## Instructions on How to Interact with the Work:
• The animation will start as soon as the page is loaded. Apples (circles) will start falling at different times, with each apple having a delay before it begins its descent.

• As the apples fall, they bounce off the bottom of the canvas and slowly return to their original positions. This continues in a smooth, time-based loop.

• The rectangles and semicircles on the bottom remain stationary in the background, providing contrast to the falling and bouncing apples.


## Details of My Individual Approach to Animating the Group Code:
I chose to drive the animation using **time-based** events for my part. Specifically, I employed **timers** and **events** to control the movement and behavior of the falling and bouncing circles. Each circle begins its animation at a different time based on a preset delay, creating a dynamic effect.


## Animation Driven by Time:
• **Timer and Delay**: The circles fall one by one, with each circle starting its movement after a specific delay. This is achieved by using the **millis()** function to track time and trigger the fall.
https://p5js.org/reference/p5/millis/

• **Gravity and Bouncing**: After the circles fall and hit the bottom of the canvas, they bounce a few times before eventually returning to their original positions using a smooth easing factor.

• **Returning to Original Position**: After the bouncing stops, the circles slowly return to their starting point using a time-based approach with easing to create a smooth transition.


## Animated Properties:
• **The Y-position of the circles**: They fall under the influence of gravity and then bounce when they hit the bottom of the canvas.

• **The Smooth Return**: After stopping, the circles smoothly return to their original positions.


## Inspiration for the Animation:
• The idea of creating a dynamic, time-based animation with circles bouncing and returning smoothly was inspired by classic **gravity-based simulations** in animation and interactive art. The bouncing circles and the slow, smooth return create a calming effect.
>[3D Apples Falling Animation in Green Screen and Black Screen No Copyright Video](https://www.youtube.com/watch?v=GLVIqepC9p0)


## Technical Explanation:
• **Gravity and Bounce**: The vertical movement of the circles is driven by a gravity variable, and the bounce effect is created by reversing the vertical speed upon hitting the bottom of the canvas.

• **Easing**: The **easingFactor** is used to gradually reduce the bounce speed, making the movement smoother as it reaches its final position.

• **Timer-based Delay**: Each circle has an individual delay (**this.delay**) before it starts its descent, calculated by multiplying the circle's index by 20 milliseconds (**let delay = i * 20**).