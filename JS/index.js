
// consturct this in js so i can easily just edit this one and all my pages get updated nav bar.
// first get nav el
const navDropDownEl = document.querySelector(".dropdown-content");
// make object i need name the pages and titel and if i place it in the dropdown list or make it a stand alone
const dropDownContent = ["drumkit","gridmode","bouncingballs","fancylines","mycalculator","collision","oppgaver","animations","higherorder","games"];
const linkStyleClass = "link-el";

// there done absolutely perfect JK this is trash.
// i need to refactor and make this nicer. make it reference a txt file maybe something like write in with some key value pair
// sould i append a new child element or use this string literal inner html? it works i need to make the class a var incase i change it
//keeping this old version so i can see how far ive come
/*
function navbardropdown(){
    let updateddropdown = "";
    for (let i = 0; i < dropdowncontent.length; i++){
        updateddropdown += `<a class="${cssLink}" href="${dropdowncontent[i]}.html">${dropdowncontent[i]}</a>`
    }
    navDropDownContent.innerHTML = updateddropdown;
}
navbardropdown();
*/

function navBarDropDown(targetEl, linkArray){
    linkArray.forEach(string => {
        let link = document.createElement("a")
        link.href = string + ".html"
        link.textContent = string
        link.className = linkStyleClass
        targetEl.append(link) 
    });
}

navBarDropDown(navDropDownEl, dropDownContent)