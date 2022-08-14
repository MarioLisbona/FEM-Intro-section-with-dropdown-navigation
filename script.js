// variables for html elements
const companyBtn = document.querySelector('.btn-dropdown-company')
const companyIcon = document.querySelector('.company-icon')
const companyDropDown = document.querySelector('.company')
const featuresBtn = document.querySelector('.btn-dropdown-features')
const featuresIcon = document.querySelector('.features-icon')
const featuresDropDown = document.querySelector('.features')


//event listeners on the features and company buttons to activate the dropdown menu
featuresBtn.addEventListener('click', () => {

    menuReveal(featuresDropDown, featuresIcon)

})

companyBtn.addEventListener('click', () => {

    menuReveal(companyDropDown, companyIcon)

})


//listening for a click anywhere on the window to remove a dropdown menu if it is open
window.onclick = function(e) {


    if(!e.target.matches('.btn-dropdown-features')) {

        menuHide(featuresDropDown, featuresIcon)

    }

    if(!e.target.matches('.btn-dropdown-company')) {

        menuHide(companyDropDown, companyIcon)

    }

}

// reaveals the menu if the hide-dropdown class is present and changes the arrow from down to up
function menuReveal(menu, icon) {

    if (menu.classList.contains('hide-dropdown')) {
        menu.classList.remove('hide-dropdown')
    } else if (!menu.classList.contains('hide-dropdown')) {
        menu.classList.add('hide-dropdown')
    }

    if (icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-down')
        icon.classList.add('fa-angle-up')
    } else if (!icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-up')
        icon.classList.add('fa-angle-down')
    }
}

// hides the menu if the hide-dropdown class isnt present and changes the arrow from up to down
function menuHide(menu, icon) {

    if (!menu.classList.contains('hide-dropdown')) {
        menu.classList.add('hide-dropdown')
    }

    if (icon.classList.contains('fa-angle-up')) {
        icon.classList.remove('fa-angle-up')
        icon.classList.add('fa-angle-down')
    }
}