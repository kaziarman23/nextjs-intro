## How to install Next-Js :

1. npx create-next-app@latest 


## Routig :

## nested sigment :
  
   1. We already have a routing functility in NEXT-JS.
    2. It automatally adjust in rootLayout.
    3. We just have to maintain the folder in our app component. Have to set file name page.js
    4. We just have to link the nav item's the Link tag and href attribute.
    5. We have to set folder name's in smallCapes.

## nested layout :

   1. We can also create nested layout.
   2. In that specific folder we have to create layout.js file



## Loading :

   1. We have to create a loading.js file in that specific folder that we want to show loading.
   2. If we want to show it to every where we have to create that file in the root folder.


## Error :

   1. We have to copy the error handling code from Next-Js documentory.
   2. Now create a file name error.js and paste the code.
   3. It will catch the error if the component have some error.


## clientSide Rendering :

   1. We have to use function's on client side component. We can't not use serverSide like clientSide.
   2. By using this on the top of that file "use client" we can make any component server side to client side.
   3. Normally Client side component's are store in inside of app folder with the name of component's 


## Fetch :

   1. We can fetch Api with out using any effect.
   2. Just call a Api in one single component.
   3. And use it in in other component by calling it.
   4. It is a good pactice to create the Api component in the lib forder and it stays in the root 