function printText(el) {
    let text = el.innerHTML;
    let i = 0;
    let print = function(){
        i++;
        if(i <= text.length){
            el.innerHTML = text.substr(0, i);
            setTimeout(print, 15);
        }
    };
    print();
}

if(window.outerWidth > 768) {
    printText(document.getElementById('print-text'));
}

