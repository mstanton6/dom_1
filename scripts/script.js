
// In order to add submenu links, we will need to restructure the menuLinks array within index.js. 
// Update the menuLinks array to the following:
var menuLinks = [

  { text: 'about', href: '/about' },

  {
    text: 'catalog', href: '#', subLinks: [

      { text: 'all', href: '/catalog/all' },

      { text: 'top selling', href: '/catalog/top' },

      { text: 'search', href: '/catalog/search' },

    ]
  },

  {
    text: 'orders', href: '#', subLinks: [

      { text: 'new', href: '/orders/new' },

      { text: 'pending', href: '/orders/pending' },

      { text: 'history', href: '/orders/history' },

    ]
  },

  {
    text: 'account', href: '#', subLinks: [

      { text: 'profile', href: '/account/profile' },

      { text: 'sign out', href: '/account/signout' },

    ]
  },

];

// Menu data structure
/* var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
*/

// Part 1 -------------------------------------------------
// 1.   Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

// 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3.   Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// 4.   Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

// Part 2 -------------------------------------------------
// 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// 2.   Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4.   Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
// console.log(topMenuEl);

// Part 3 -----------------------------------------------
// 1.   Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // 2.   Create an <a> element.
  let anchor = document.createElement("a");

  // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
  anchor.setAttribute("href", link.href);

  // 4.   Set the new element's content to the value of the text property of the "link" object.
  anchor.textContent = link.text;

  // 5.   Append the new element to the topMenuEl element.
  topMenuEl.appendChild(anchor);
}

// PART TWO
//////

/// Part 3: Creating the Submenu

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.querySelector('#sub-menu');

// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

/// Part 3b: Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
// 1. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// 2. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';
// Good till here

/// Part 4: Adding Menu Interaction
//In order to add interaction:

// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.getElementsByTagName('a');
console.log('topMenuLinks ' + topMenuLinks);
// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  // 2a. The first line of code of the event listener function should call the event object's preventDefault() method.

  event.preventDefault();

  // 2b. The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!event.target.matches('a')) {  
    return;
  }
  //2c. Log the content of the <a> to verify the handler is working.
  let acontent = event.target.textContent;
  console.log('acontent is ' + acontent);

  // Part 4 - Second part

  // 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active,
  // in which case it should remove it.
  // Start HERE
  // remove the active class if it was already active
   if (event.target.hasAttribute('class')) {
        event.target.classList.remove('active');
   }
   else {
        // // 2. The event listener should remove the active class from each other <a> element in topMenuLinks -
        // //    whether the active class exists or not.
       // //    Hint: Removing a non-existent class from an element does not cause an error

        for (i=0; i<topMenuLinks.length;i++) {
           topMenuLinks[i].classList.remove('active');  // create a loop that removes from all of them // for or for each
        }



      event.target.classList.add('active');
   }


  // Part 5: Adding Submenu Interaction


   return;
}




