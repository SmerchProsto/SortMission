var array = [6, 2, 3, 1, 7, 4, 8, 5];

var sortedArray = SortArray(array);

DrawArray(sortedArray);

function SortArray(array) {
    var count = 0; // number of final minimum
    var min = 99999; // for comparison with anything number
    var k = 0; // variable for safe first value of number
    var isSmaller = false; // check value of number is min than right now

    for (var i = 0; i < array.length; i++) {
       for (var j = i+1; j < array.length; j++) {
            if (array[j] < array[i] && array[j] < min) {
                min = array[j];
                count = j;
                isSmaller = true;
            }
       }

       if (isSmaller) {
            k = array[i];
            array[i] = min;
            array[count] = k;
            min = 99999;
       }
       
       isSmaller = false;
    }

    return array;
}

function DrawArray(array) {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}