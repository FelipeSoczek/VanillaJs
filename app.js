/* Aula 3 - Seleciona por classe, testa se é array e converte pra array
var titles = document.getElementsByClassName('title'); //Pegando as classes html e fazendo collection

console.log(Array.isArray(titles)); //testa se é array
console.log(Array.isArray(Array.from(titles))); //Converte em array

Array.from(titles).forEach(function(item){
	console.log(item);
})
*/

/* Aula 4 - Query Selector(pra 1 elemento ou varios(All)).

const wmf = document.querySelector('#book-list li:nth-child(2).name');
//console.log(wmf);

var books = document.querySelector('#book-list li .name');
//console.log(books);

var books = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(books).forEach(function(book) {
	console.log(book);
})

*/

/*Aula 5 - Changing text e html content - Qd vc usa Query selector n precisa transformar as coisas em array, qd usa getElementBy precisa.

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book) {
	//console.log(book.textContent);
	book.textContent += '(book title)'; //muda tudo pra text os textos
});

const bookList = document.querySelector('#book-list');
//console.log(bookList.innerHTML); //mostra na tela todo o html

bookList.innerHTML ='<h2>Books...</h2>'; //substitui todo o html por isso
bookList.innerHTML ='<p>This is how you add html...</p>'; //adiciona ao html de cima/apend */


/* Aula 6 - Nodes/Nós /Tudo é nós no dom e cada um tem um numero. Ex: 1 = Element

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType); //tipo

console.log('#page-banner node name is:', banner.nodeName); //o nome

console.log('#page-banner has child nodes:', banner.hasChildNodes()); //true or false se tem childs

const clonedBanner = banner.cloneNode(true); //Aqui ele clona tudo do banner junto com nodes

console.log(clonedBanner); */

/* Aula 7 - Traversing the Dom pt1 (Ir pra cima e pra baixo nos nós)

const bookList = document.querySelector('#book-list');
console.log('the parent node is:', bookList.parentNode); //Faz a mesma coisa 
console.log('the parent element is:', bookList.parentElement.parentElement); //Aqui ele sobe o nó parente de cima

console.log(bookList.childNodes); //aqui desce para o nó abaixo
console.log(bookList.children); */

/* Aula 8 - Traversing the DOM. Passando de nós no mesmo nível

const bookList = document.querySelector('#book-list');
console.log('book-list next sibling is:', bookList.nextSibling); //Sibling depois do bookList
console.log('book-list next element sibling is:', bookList.nextElementSibling); //Sibling depois do ^

console.log('book-list prev sibling is:', bookList.previousSibling); //Aqui sobe
console.log('book-list prev element sibling is:', bookList.previousElementSibling); //Sobe

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool'; //Sobe o nó e adiciona o html
*/

/* Aula 9 - Events

var btns = document.querySelectorAll('#book-list .delete'); //pegando os botoes
Array.from(btns).forEach(function(btn) { //Transformando em array e adicionando e.listener
	btn.addEventListener('click', function(e) { //Colocando o evento nos botoes
		const li = e.target.parentElement; //Onde é clicado é pego os nós a serem deletados
		li.parentNode.removeChild(li) //Aqui apaga
	});
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e) {
	e.preventDefault(); //Cancela a ação normal do node em questão
	console.log('navigation to', e.target.textContent, ' was prevented');
});
*/

/* Aula 10 - Event bubling /O evento se espalha para nós superiores

//Aqui ele adiciona o evento de deletar diretamente no ul. Mesmo se for adicionado novo html ele será deletado(Pra nao precisar colocar em todos os itens estaticamente)

const list = document.querySelector('#book-list ul'); 
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
})
*/


/* Aula 11 - Interacting with forms /Pega o valor no input de add livro


const list = document.querySelector('#book-list ul'); 

//delete books
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	console.log(value);
});
*/

/* Aula 12 - Creating Elements / Vai criar html através do js e adicionar o livro


const list = document.querySelector('#book-list ul'); 

//delete books
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;


//create elements / Vai colocar isso no DOM
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content

deleteBtn.textContent = 'delete';
bookName.textContent = value;


//append to DOM
li.appendChild(bookName); //appendchild Liga ao DOM
li.appendChild(deleteBtn);
list.appendChild(li);
});
*/

/* Aula 13 - Styles & Classes

const list = document.querySelector('#book-list ul'); 

//delete books
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;


//create elements / Vai colocar isso no DOM
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content

deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes aos spans
bookName.classList.add('name');
deleteBtn.classList.add('delete');


//append to DOM
li.appendChild(bookName); //appendchild Liga ao DOM
li.appendChild(deleteBtn);
list.appendChild(li);
});
*/

/* Aula 14 - Atributes

Ensina que vc pode adicionar, remover atributos como classes etc.
Também checando se tem ou não o atributo em questão.

var book = document.querySelector('li:first-child .name')
undefined

book.getAttribute('class')
"name"
book.getAttribute('href')
null
ook.setAttribute('class', 'name2')
undefined
book.hasAttribute('class')
true
book.hasAttribute('href')
false
book.removeAttribute('class')
undefined
book.setAttribute('class', 'name')
undefined
*/

/* Aula 15 Checkboxes & Change events /Hide books


const list = document.querySelector('#book-list ul'); 

//delete books
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;


//create elements / Vai colocar isso no DOM
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content

deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes aos spans
bookName.classList.add('name');
deleteBtn.classList.add('delete');


//append to DOM
li.appendChild(bookName); //appendchild Liga ao DOM
li.appendChild(deleteBtn);
list.appendChild(li);
});

//hide books

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
	if(hideBox.checked){
		list.style.display = "none";
	} else {
		list.style.display = "initial"; //or block
	}
});
*/

/* Aula 16 - Custom search filter


const list = document.querySelector('#book-list ul'); 

//delete books
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;


//create elements / Vai colocar isso no DOM
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content

deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes aos spans
bookName.classList.add('name');
deleteBtn.classList.add('delete');


//append to DOM
li.appendChild(bookName); //appendchild Liga ao DOM
li.appendChild(deleteBtn);
list.appendChild(li);
});

//hide books

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
	if(hideBox.checked){
		list.style.display = "none";
	} else {
		list.style.display = "initial"; //or block
	}
});

//filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book) {
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	})
})
*/

/* Aula 17 - Tabbed Content

const list = document.querySelector('#book-list ul'); 

//delete books
list.addEventListener('click', function(e) {
	if(e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;


//create elements / Vai colocar isso no DOM
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content

deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes aos spans
bookName.classList.add('name');
deleteBtn.classList.add('delete');


//append to DOM
li.appendChild(bookName); //appendchild Liga ao DOM
li.appendChild(deleteBtn);
list.appendChild(li);
});

//hide books

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
	if(hideBox.checked){
		list.style.display = "none";
	} else {
		list.style.display = "initial"; //or block
	}
});

//filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book) {
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	})
})

//tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e) {
	if(e.target.tagName == "LI") {
		const targetPanel = document.querySelector(e.target.dataset.target); //o dataset pega o data-target do HTML
		panels.forEach(function(panel) {
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		});
	}
});

*/

/* Aula 18 DOMContentLoaded Event 

Fala sobre colocar o .js no topo, então o script não funciona pq o DOM ainda não carregou. 

Se eu colar dentro dessa função o js funciona mesmo estando linkado no header:

document.addEventListener('DOMContentLoaded', function() {
	* Script aqui!!! *
});
