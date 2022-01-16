

let elmodalbox=document.getElementById('modalBox');
let elbtndarklight=document.getElementById('btndark');
let elclose=document.getElementById('closebtn');

elbtndarklight.addEventListener('click',function () {
elmodalbox.classList.add('show');
});

elclose.addEventListener('click',function () {
elmodalbtnbox.classList.remove('show');
 });





document.getElementById('lightbtn').addEventListener('click', function () {document.body.classList.toggle('dark');
}
);
document.getElementById('darktbtn').addEventListener('click', function () {document.body.classList.toggle('dark');
}
);