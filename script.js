const companyIcon = document.querySelector('.company-icon')
const companyDropDown = document.querySelector('.company')
const featuresIcon = document.querySelector('.features-icon')
const featuresDropDown = document.querySelector('.features')



companyIcon.addEventListener('click', function(e) {
    swapArrow(e);

    if (!companyDropDown.matches('.hide-dropdown')) {
        companyDropDown.classList.add('hide-dropdown')
    } else if (companyDropDown.matches('.hide-dropdown')) {
        companyDropDown.classList.remove('hide-dropdown')
    }
})

featuresIcon.addEventListener('click', function(e) {
    swapArrow(e);

    if (!featuresDropDown.matches('.hide-dropdown')) {
        featuresDropDown.classList.add('hide-dropdown')
    } else if (featuresDropDown.matches('.hide-dropdown')) {
        featuresDropDown.classList.remove('hide-dropdown')
    }
})

function swapArrow(event) {
    if (event.target.matches('.fa-angle-down')) {
        event.target.classList.remove('fa-angle-down');
        event.target.classList.add('fa-angle-up');
    } else if (!event.target.matches('.fa-angle-down')) {
        event.target.classList.add('fa-angle-down');
        event.target.classList.remove('fa-angle-up');
    }
}