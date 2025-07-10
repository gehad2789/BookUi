const prev_btn=document.querySelector('.prev');
const nex_btn=document.querySelector('.nex');
const num=document.querySelector('.numb');
const form=document.getElementById('bookForm');
const submitBtn=document.querySelector('.submitdata');
   const mainCard=document.querySelector('.maincard');


const my_library=[
     {
    title: "1984",
    author: "George Orwell",
    desc: "A dystopian novel set in a totalitarian society under constant surveillance.",

    pagenums: 328,
    status: "Read"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    desc: "A novel that explores racial injustice and moral growth in the American South.",
    pagenums: 281,
    status: "Unread"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pagenums: 180,
    desc: "A tragic story of love, wealth, and the American Dream in the 1920s.",
    status: 'unread'
  },
];

function book(title, author,desc='',pagenums, status=false){
    this.title=title;
    this.author=author;
    this.pagenums=pagenums;
    this.desc=desc;
    // this.status=status;
    this.status?'Read':'UnRead';

    this.id=crypto.randomUUID();//create random ids


}
    

form.addEventListener('input',function(){
submitBtn.disabled = !form.checkValidity()
 //disabled if not valid
});


 form.addEventListener('submit', function (e){//must add name to html input
    e.preventDefault();
    const formData=new FormData(form);//daa from form
        const title=formData.get('title');
        const pagenums= Number(formData.get('pagenums'));
        const auther=formData.get('auther');
        const status=formData.get('status')==='on';//if on return true else false[as checkbox[on or null]]
        const desc=formData.get('desc');
        const newBook= new book(title,auther , desc,pagenums, status);
        my_library.push(newBook);
        
            form.reset();  
            displayBooks();


})

function displayBooks(){
      mainCard.innerHTML = ''; // clear old content first

      if(my_library.length===0) {
            mainCard.innerHTML = `<p class="text-muted">No books added yet.</p>`;
            return;
    
    }


        my_library.forEach(item=>{
            //to not over ride everyone each time it loops [innerhtml]
        const cardbody=document.createElement('div');
        cardbody.classList.add('card','shadow','p-4','flex-shrink-0','mx-auto','w-50','text-center','bg-light','border','border-secondary');

        cardbody.innerHTML =`
        <h3 class="card-title  shadow">
        ${ item.title}
        </h3>
        <h6 class=text-muted card-subtitle p-3"> ${item.author}</h6>

        <p class="card-text text-break">
        ${item.desc}
        <br>
        <span class=' p-2'>
  Pages Numbers : <span class="badge bg-secondary">${item.pagenums}</span>
</span>


        </p>
        <small class ='text-danger fw-bold'> ${item.status}</small>
        
        
        `
        mainCard.appendChild(cardbody);
            
        })
 



        
    }


displayBooks()



function scrolright(){
    mainCard.scrollBy({left:-300,behavior:'smooth'});

    

}
function scroleft(){
    mainCard.scrollBy({left:300,behavior:'smooth'});

}