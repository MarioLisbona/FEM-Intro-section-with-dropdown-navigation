const companyBtn = document.querySelector('.btn-dropdown-company')
const companyIcon = document.querySelector('.company-icon')
const companyDropDown = document.querySelector('.company')
const featuresBtn = document.querySelector('.btn-dropdown-features')
const featuresIcon = document.querySelector('.features-icon')
const featuresDropDown = document.querySelector('.features')

companyIcon.addEventListener('click', function(e) {

    dropDownAction(e ,companyDropDown)
})

featuresIcon.addEventListener('click', function(e) {

    dropDownAction(e ,featuresDropDown)
})


window.onclick = function(e) {

    popUpAction(e, companyDropDown, companyIcon, '.company-icon')
    popUpAction(e, featuresDropDown, featuresIcon, '.features-icon')

}

function dropDownAction(event, menu) {

    if (event.target.matches('.fa-angle-down')) {
        event.target.classList.remove('fa-angle-down');
        event.target.classList.add('fa-angle-up');
    } else if (!event.target.matches('.fa-angle-down')) {
        event.target.classList.add('fa-angle-down');
        event.target.classList.remove('fa-angle-up');
    }

    if (!menu.matches('.hide-dropdown')) {
        menu.classList.add('hide-dropdown')
    } else if (menu.matches('.hide-dropdown')) {
        menu.classList.remove('hide-dropdown')
        menu.classList.add('show-dropdown')
    }
}

function popUpAction(event, dropdown, icon, className) {
    if (!event.target.matches(className)) {

        if (dropdown.classList.contains('show-dropdown')) {
            dropdown.classList.remove('show-dropdown')
            dropdown.classList.add('hide-dropdown')
        }

        if (icon.classList.contains('fa-angle-up')) {
            icon.classList.remove('fa-angle-up')
            icon.classList.add('fa-angle-down')
        }
    }
}


