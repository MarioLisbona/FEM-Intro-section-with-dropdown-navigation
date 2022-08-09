const companyBtn = document.querySelector('.btn-dropdown-company')
const companyIcon = document.querySelector('.company-icon')
const companyDropDown = document.querySelector('.company')
const featuresBtn = document.querySelector('.btn-dropdown-features')
const featuresIcon = document.querySelector('.features-icon')
const featuresDropDown = document.querySelector('.features')

featuresBtn.addEventListener('click', () => {

    if (featuresDropDown.classList.contains('hide-dropdown')) {
        featuresDropDown.classList.remove('hide-dropdown')
    } else if (!featuresDropDown.classList.contains('hide-dropdown')) {
        featuresDropDown.classList.add('hide-dropdown')
    }

    if (featuresIcon.classList.contains('fa-angle-down')) {
        featuresIcon.classList.remove('fa-angle-down')
        featuresIcon.classList.add('fa-angle-up')
    } else if (!featuresIcon.classList.contains('fa-angle-down')) {
        featuresIcon.classList.remove('fa-angle-up')
        featuresIcon.classList.add('fa-angle-down')
    }

})

companyBtn.addEventListener('click', () => {

    if (companyDropDown.classList.contains('hide-dropdown')) {
        companyDropDown.classList.remove('hide-dropdown')
    } else if (!companyDropDown.classList.contains('hide-dropdown')) {
        companyDropDown.classList.add('hide-dropdown')
    }

    if (companyIcon.classList.contains('fa-angle-down')) {
        companyIcon.classList.remove('fa-angle-down')
        companyIcon.classList.add('fa-angle-up')
    } else if (!companyIcon.classList.contains('fa-angle-down')) {
        companyIcon.classList.remove('fa-angle-up')
        companyIcon.classList.add('fa-angle-down')
    }

})

companyIcon.addEventListener('click', function(e) {

    dropDownAction(e ,companyDropDown)
})

featuresIcon.addEventListener('click', function(e) {

    dropDownAction(e ,featuresDropDown)
})


window.onclick = function(e) {

    if(!e.target.matches('.btn-dropdown-features')) {
        if (!featuresDropDown.classList.contains('hide-dropdown')) {
            featuresDropDown.classList.add('hide-dropdown')
        }

        if (featuresIcon.classList.contains('fa-angle-up')) {
            featuresIcon.classList.remove('fa-angle-up')
            featuresIcon.classList.add('fa-angle-down')
        }
    }

    if(!e.target.matches('.btn-dropdown-company')) {
        if (!companyDropDown.classList.contains('hide-dropdown')) {
            companyDropDown.classList.add('hide-dropdown')
        }

        if (companyIcon.classList.contains('fa-angle-up')) {
            companyIcon.classList.remove('fa-angle-up')
            companyIcon.classList.add('fa-angle-down')
        }
    }
}

    // popUpAction(e, featuresDropDown, featuresIcon, '.btn-dropdown-features')
    // popUpAction(e, companyDropDown, companyIcon, '.btn-dropdown-company')

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


