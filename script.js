//pasizymiu pirma div - vieta
const my_div = document.getElementById('main_div');

const my_link = document.createElement('a');
my_link.textContent = "sds";
my_div.appendChild(my_link);
my_link.href = "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction";
my_link.target = "_blank";

const my_p_array = document.querySelectorforAll('p');
console.log(my_p_array);
for(let i=0; i<my_p_array.length; i++) {
    my_p_array[i].style.color = "blue";
}
