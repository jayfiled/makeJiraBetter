// Shared variables
const allDescriptionElements = document.getElementsByClassName('description');
const descriptionText = [];
// Page already has a .toolTip class, so needed to name it 'cooltip'
const toolTip = `<div class="cooltip"><span class="cooltiptext"></span></div>`;

const grabDescriptionText = (nextFunction) => {
    console.log('Copying text from description fields..');

    for (let i = 0; i <= (allDescriptionElements.length - 1); i++){
        descriptionText.push(allDescriptionElements[i].innerText);

    }

    nextFunction();
}

const emptyDescriptionElements = (nextFunction) => {
    console.log('Emptying description elements..');

    for (let i = 0; i <= (allDescriptionElements.length - 1); i++){

        while (allDescriptionElements[i].firstElementChild) {
            allDescriptionElements[i].removeChild(allDescriptionElements[i].firstElementChild);
        }
    }

    nextFunction();
}


const addToolTipContent = (nextFunction) => {
    console.log('Adding content to tool tips..', descriptionText);

    for (let i = 0; i <= (allDescriptionElements.length - 1); i++){

        allDescriptionElements[i].innerHTML = toolTip;

        const toolTipContent = allDescriptionElements[i].firstChild.firstChild;
        toolTipContent.innerText = descriptionText[i];


    }
    nextFunction();
}

const styleToolTips = (nextFunction) => {
    console.log('Styling Tool Tips..');

    const cTipEl = document.getElementsByClassName('cooltip');
    const cTipElText = document.getElementsByClassName('cooltiptext');

    for (let i = 0; i <= (cTipEl.length - 1); i++) {
        cTipEl[i].style.position = 'relative';
        cTipEl[i].style.display = 'inline-block';
        cTipEl[i].style.borderBottom = 'inline-block';
        cTipEl[i].style.borderBottom = '1px dotted black';
    }

    for (let i = 0; i <= (cTipElText.length - 1); i++) {
        cTipElText[i].style.visibility = 'hidden';
        cTipElText[i].style.backgroundColor = '#eee';
        cTipElText[i].style.color = '#111';
        cTipElText[i].style.padding = '16px';
        cTipElText[i].style.borderRadius = '6px';
        cTipElText[i].style.position = 'fixed';
    }
    nextFunction();
}

const addListeners = (nextFunction) => {
    console.log('Adding event listeners to each description field..');

    for (let i = 0; i <= (allDescriptionElements.length - 1); i++){

        allDescriptionElements[i].addEventListener('mousemove', function(e) {
            const ourTarget = e.target.firstElementChild.firstElementChild;
            const x = e.clientX;
            const y = e.clientY;
            ourTarget.style.visibility = 'visible';
            ourTarget.style.left = `${(x + 12)}px`
            ourTarget.style.top =`${(y + 5)}px`
        });

        allDescriptionElements[i].addEventListener('mouseout', function(event) {
            const ourTarget = event.target.firstElementChild.firstElementChild;
            ourTarget.style.visibility = 'hidden';
        });

    }
    nextFunction();
}

const reportAfterLastFunctionFinishes = () => {
    console.log('Description content added to tool tip when you hover over description field!');
    }

const runAllTheFunctionsInSync = () => {
    grabDescriptionText(function() {
        emptyDescriptionElements(function() {
            addToolTipContent(function() {
                styleToolTips(function() {
                    addListeners(function() {
                        reportAfterLastFunctionFinishes();
                    });
                });
            });
        });
    });
}

// Jira refreshes the page after window.onload and DOMContentLoaded,
// so need to delay script running.
setTimeout(runAllTheFunctionsInSync, 1000);